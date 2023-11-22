---
layout: article
---

```
pipeline {
agent none
    stages {
        stage("build and test the project") {
            agent {
                docker "our-build-tools-image"
            }
            stages {
               stage("build") {
                   steps {
                       sh "mkdir artifacts && echo 'some code' > artifacts/app"
                   }
               }
               stage("test") {
                   steps {
                       sh "echo 'report of tests' > artifacts/tests.log"
                   }
               }
            }
            post {
                success {
                    stash name: "artifacts", includes: "artifacts/**/*"
                }
            }
        }

        stage("deploy the artifacts if a user confirms") {
            input {
                message "Should we deploy the project?"
            }
		        agent {
                docker "our-deploy-tools-image"
            }
            steps {
                sh "./deploy.sh"
            }
        }
    }
}
```

Обрати внимание, что на глобальном уровне у нас агент выставлен в `none`. Т.е. по умолчанию никакого агента не предоставляется. Но мы определяем их внутри этапов отдельно для каждой stage.

В первой стадии мы создаем приложение внутри `docker-executor`. Вторая стадия исполняется на другом агенте. 

Чтобы сохранить артефакты из стадии `build and test the project`, а затем передать их на другой агент в следующую stage `deploy the artifacts if a user confirms`, мы используем директиву `stash`. Эта инструкция, как и инструкция `archiveArtifacts` нужна для сохранения артефактов. Хотя они работают немного по-разному: первая для маленьких артефактов, вторая для больших.

Так вот, этап `build and test the project` и его подэтапы `test` и `build` завершены, и мы припрятали наши артефакты через `post-action` этого первого stage.

Начинается второй stage `deploy the artifacts if a user confirms`. Прежде чем задание будет передано на агенту для исполнения, Jenkins при помощи инструкции `input` запросит подтверждение деплоя. Пользователь может далеко не сразу ответить на этот запрос, и все это время агент будет простаивать, ожидая продолжения сборки.

Но мы здесь смоги обойти это. Когда закончился первый этап, контейнер агента был удален. Во втором этапе директива `input` будет выполнена первой, и до того, как отработает директива `agent`. Следовательно, мы экономим на пустом ходе наших сборочных нагрузок, поскольку, пока `input` не cработает, `agent` не исполнится, и контейнер для сборки не будет создан.

Вот такой необычный пример.

Но основная выгода sequential stages открывается в использовании их как частей в параллельно исполняемом пайплайне.

Вот здесь у меня пример такого конвейера.
