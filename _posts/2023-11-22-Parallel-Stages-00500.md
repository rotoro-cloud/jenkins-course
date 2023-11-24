---
layout: article
---




```groovy
pipeline {
    agent {
        label 'ubuntu-agent01'
    }
    tools {
        go 'go-1.20'
    }
    stages {
        stage('test') {
            steps {
                git 'https://github.com/rotoro-cloud/go-webapp-sample.git'
                sh 'go test ./...'
            }
        }
        stage('build') {
            parallel {
                stage ('linux') {
                    steps {
                        sh 'GOOS=linux GOARCH=amd64 go build -o go-webapp-sample-amd64-linux .'
                        sh 'cp -f ./go-webapp-sample-amd64-linux /tmp/'
                    }
                }
                stage ('macos') {
                    steps {
                        sh 'GOOS=darwin GOARCH=amd64  go build -o go-webapp-sample-amd64-darwin .'
                    }
                }
                stage ('windows') {
                    steps {
                        sh 'GOOS=windows GOARCH=amd64 go build -o go-webapp-sample-amd64.exe .'
                    }
                }
            }
        }
        stage('run') {
            parallel {
                stage ('linux') {
                    agent {
                        label 'ubuntu-agent01'
                    }
                    steps {
                        sh 'export JENKINS_NODE_COOKIE=dontKillMe && /tmp/go-webapp-sample-amd64-linux &'
                    }
                }
                stage ('macos') {
                    agent {
                        label 'macos'
                    }
                    steps {
                        sh './go-webapp-sample-amd64-darwin &'
                    }
                }
                stage ('windows') {
                    agent {
                        label 'win-10-x64'
                    }
                    steps {
                        bat 'START ./go-webapp-sample-amd64.exe /min'
                    }
                }
            }
        }
    }
}
```

Как видишь, пайплайн стал больше, но пока он вполне понимаем, благодаря визуализации через `Blue Ocean`. Я запущу его на исполнение. Он ожидаемо не доходит до конца, поскольку у меня в системе только один агент, это **ubuntu-agent01**. Эта сборка будет висеть в очереди.

Ок, также при параллельном подходе мы можем использовать преимущества декларативной манеры в части запуска отдельной stage. Т.е. я могу запустить как отдельную stage, содержащую параллельные стадии, так и стадию внутри параллельного исполнения.

Ок, я думаю, что ты ухватил идею параллелизма в Jenkins pipelines. И это все. Увидимся!
