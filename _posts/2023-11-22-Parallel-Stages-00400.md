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
            steps {
                sh 'export JENKINS_NODE_COOKIE=dontKillMe && /tmp/go-webapp-sample-amd64-linux &'
            }
        }
    }
}
```

Итак, я вернул обратно stage `build`, добавил блок `parallel`, что инструктирует Jenkins запускать директивы внутри блока в одновременном режиме. Внутри блока я поместил наши этапы из последовательной сборки. Отметь для себя, что в блоке `parallel` нет блока `stages`, там присутствуют блоки `stage`.

Таким образом, дойдя до stage `build`, Jenkins запустит подфазы `linux`, `macos` и `windows` на выполнение вместе, т.е. одновременно.

Я запущу пайплайн и посмотрю логи. Как видишь, все замечательно. Еще обрати внимание на время работы, насколько оно сократилось.

Ок, go умеет собирать под разные архитектуры на одной машине. Но мы хотим двигаться дальше и запустить собранные приложения, чтобы проверить, как работают эти исполняемые файлы. 

Как нам это сделать? Ведь агент с Linux не сможет запустить файлы, предназначенные для MacOS и Windows.

Поправим stage `run`, сделав ее также в параллельной манере, указав, что запуск нужно осуществлять на соответствующих агентах.
