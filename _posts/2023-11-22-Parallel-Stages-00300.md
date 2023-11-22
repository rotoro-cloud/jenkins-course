---
layout: article
---
```groovy
pipeline {
    agent any
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
            steps {
                sh 'go build .'
                sh 'cp -f ./go-webapp-sample /tmp/'
            }
        }
        stage('run') {
            steps {
                sh 'export JENKINS_NODE_COOKIE=dontKillMe && /tmp/go-webapp-sample &'
            }
        }
    }
}
```

`Golang` - язык компилируемый, и за его производительность мы платим необходимостью собирать отдельные версии исполняемого файла под отдельные ОС и архитектуры.

К счастью, go умеет это делать в одном месте, я имею в виду, что сборка exe-файла под Windows может быть успешно проведена на машине с Linux. С запуском не получится, но со сборкой без проблем.

Изменим Jenkinsfile, добавив новые stages:

```groovy
pipeline {
    agent any
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
            steps {
                sh 'GOOS=linux GOARCH=amd64 go build -o go-webapp-sample-amd64-linux .'
                sh 'cp -f ./go-webapp-sample-amd64-linux /tmp/'
            }
        }			
        stage('build macos') {
            steps {
                sh 'GOOS=darwin GOARCH=amd64  go build -o go-webapp-sample-amd64-darwin .'
            }
        }			
        stage('build windows') {
            steps {
                sh 'GOOS=windows GOARCH=amd64 go build -o go-webapp-sample-amd64.exe .'
            }
        }			
        stage('run') {
            steps {
                sh 'export JENKINS_NODE_COOKIE=dontKillMe && /tmp/go-webapp-sample-amd64-linux &'
            }
        }
    }
}
```

У нас появились новые этапы: `build macos` и `build windows`. Также я поменял название файла в этапе build, чтобы был порядок в именовании артефактов.
