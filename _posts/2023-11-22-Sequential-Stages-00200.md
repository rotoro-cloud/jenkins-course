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

Такой синтаксис не подходит. Нам потребует создать новый блок `stages` в этапе-родителе и повторить в нем структуру stages, как если бы мы делали это на самом верхнем уровне.

```groovy
pipeline {
    agent any
    stages {
        stage('first') {
            stages {
                stages('second') {
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

Ну начнем с того, что группировка стадий не так бесполезна.

Вот здесь пайплайн.
