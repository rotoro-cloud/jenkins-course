---
layout: article
---

```groovy
pipeline {
    agent any
    stages {
        stage('first') {
            steps {
                echo "First stage"
            }
            stage('second') {
                steps {
                    echo "Second stage"
                }
            }
        }
    }
}
```

Такой синтаксис не подходит. Нам потребуется создать новый блок `stages` в этапе-родителе и повторить в нем структуру stages, как если бы мы делали это на самом верхнем уровне. Ты можешь запустить файл из репо, его название `Jenkinsfile-8.25-1`.

```groovy
pipeline {
    agent any
    stages {
        stage('first') {
            stages {
                stage('second') {
                    steps {
                        echo "Second stage"
                    }
                }
            }
        }
    }
}
```

Как видишь, эти вложенные stages исполняются последовательно и из-за этого их называют `sequential stages`.

Но если они исполняются друг за другом, т.е. аналогично `multistage`, который описывается на верхнем уровне, зачем эта сложность во вложенных stages? Какой в них смысл?

Ну начнем с того, что группировка стадий не так бесполезна. Вот здесь пайплайн.
