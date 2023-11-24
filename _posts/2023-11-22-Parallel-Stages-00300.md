---
layout: article
---
Изменим Jenkinsfile, добавив новые stages (в репо `Jenkinsfile-8.20-1`):

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

Теперь запустим этот пайплайн. Как видишь, сначала собирается билд под `Linux`, потом под `MacOS` и в конце под `Windows`. Всего сборка заняла 3 минуты. Запущу приложение - оно успешно задеплоилось.

И это неплохо работает, пока stages простые и короткие по времени. Но что, если каждый из этапов будет по `20` минут? Тогда на сборку уйдет больше часа. Если билд для Windows упадет в середине, то мы узнаем об этом только через `50` минут после запуска. Так себе. Давай улучшим пайплайн, добавив в него `параллелизм`.

