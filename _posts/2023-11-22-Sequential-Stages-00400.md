---
layout: article
---

```
pipeline {
    agent none
    stages {
        stage("build and deploy on Windows and Linux") {
            parallel {
                stage("windows") {
                    agent {
                        label "windows"
                    }
                    stages {
                        stage("build") {
                            steps {
                                bat "run-build.bat"
                            }
                        }
                        stage("change config") {
                            steps {
                                bat "config.bat"
                            }
                        }
                        stage("deploy") {
                            steps {
                                bat "run-deploy.bat"
                            }
                        }
                        stage("restore settings") {
                            steps {
                                bat "config.bat"
                            }
                        }
                    }
                }
                stage("linux") {
                    agent {
                        label 'ubuntu-agent01'
                    }
                    stages {
                        stage("build") {
                            steps {
                                sh "echo './run-build.sh'"
                            }
                        }
                        stage("deploy") {
                             steps {
                                sh "echo './run-deploy.sh'"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Здесь у меня есть две параллельные **"ветки"** внутри этапа `build and deploy on Windows and Linux`. Они исполняются на разных агентах. Из-за того, что в моей системе нет агента с меткой `windows`, этот билд застрял. Но преимущества разделения этапов на `sequential stages` с параллельным подходом понятны: к ускорению параллельного выполнения добавляется прозрачность и понятность идущих друг за другом стадий. Человеку, незнакомому с пайплайном, будет достаточно посмотреть на визуальную схему такого конвейера, чтобы быстро во всём разобраться.

Что же это все. Надеюсь это было полезно. Увидимся!
