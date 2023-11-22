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
                        label "linux"
                    }
                    stages {
                        stage("build") {
                            steps {
                                sh "./run-build.sh"
                            }
                        }
                        stage("deploy") {
                             steps {
                                sh "./run-deploy.sh"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

Преимущества разделения этапов на `sequential stages` с параллельным подходом понятны: к ускорению параллельного выполнения добавляется прозрачность и понятность идущих друг за другом стадий.

Что же это все. Надеюсь это было полезно. Увидимся!
