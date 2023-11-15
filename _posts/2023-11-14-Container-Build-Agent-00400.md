---
layout: article
---
Итак, я иду в `VS Code`, где у меня Jenkinsfile, как ты видишь. Он тоже доступен в ветке `jenkinsfiles` в номером темы.

```groovy
pipeline {
    agent {
        docker { 
            image 'golang:1.19-alpine' 
            args '-u root:root'
        }
    }
    stages {
        stage('test') {
            steps {
                sh 'apk add build-base'
                git 'https://github.com/rotoro-cloud/go-webapp-sample.git'
                sh 'go test ./...'
                sh 'go version'
            }
        }
    }
}
```

Мы делали почти такой же, когда настраивали CI-пайплайн. Здесь один `stage` 'test'. Но этот конвейер имеет отличие. Оно в инструкции `agent`. Как видишь в качестве агента я указываю докер-образ с `golang` на борту.

Раньше мы пользовались Docker, чтобы упаковать наше приложение в контейнер для последующей передачи на деплой. Но теперь это выглядит по-другому. Как это работает?

Основное отличие в том, что мы не собираем докер-образ, как результат работы пайплайна, а осуществляем саму работу пайплайна внутри докер-образа.

Какие преимущества это дает? Первое в том, что мы можем контролировать версии инструментов, которые будут работать при сборке нашего приложения. Как ты помнишь, в момент записи курса `go-webapp-sample` не может быть собрано при помощи `golang v1.21`. В качестве обхода мы использовали директиву tool, в которой просили Jenkins использовать `go` более ранней версии. Теперь в этом нет необходимости, поскольку сборка происходит внутри контейнера, запущенного из образа с `golang v1.19`. 

```groovy
pipeline {
    agent {
        docker { 
            image 'golang:1.21-alpine' 
            args '-u root:root'
        }
    }
    stages {
        stage('test') {
            steps {
                sh 'apk add build-base'
                git 'https://github.com/rotoro-cloud/go-webapp-sample.git'
                sh 'go test ./...'
                sh 'go version'
            }
        }
    }
}
```

Как только мы обновим наш код, и он сможет успешно собраться в среде golang v1.21, нам достаточно будет поменять тег образа в директиве `agent`, после чего все сборки перейдут на другую версию компилятора.

Еще один приятный момент, что после сборки этого job, у нас не остается контейнера, т.е. у нас не будет ни go-1.19, ни go-1.21, ни чего бы то ни было еще, что мы запускали в контейнере. Система, где запускался билд, будет чистая.

Также мы можем запустить много таких агентов в контейнерах в рамках одного хоста, и настроить демон докера так, чтобы он не давал этим экземплярам замедлить докер-хост. Для работы мы можем использовать как образы, полученные из публичного или приватного реджистри, так и собрав образ локально, используя Dockerfile.

Есть конечно и минусы. Например для того, чтобы внутри пайплайна, который бежит в контейнере-агенте, запустить сборку своего докер-образа, придется постараться.

Ок, как именно это сделать, как использовать контейнеры в качестве агентов?