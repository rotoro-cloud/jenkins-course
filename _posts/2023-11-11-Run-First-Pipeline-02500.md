---
layout: article
---
В поле `Definition` можно выбрать источник Jenkinsfile. Его можно взять из системы контроля версий или написать прямо здесь. Если оставить первый вариант, то справа будет окошко, в котором есть пресеты готовых Jenkinsfiles.

Например, я выберу `Hello World`, и здесь появится файл-образец pipeline с одной stage, в которой вызывается `echo`. Здесь также есть пример GitHub плюс Maven и пример скриптового конвейера. Как ты помнишь у Jenkinsfile есть два варианта написания, для тех кто умеет в Groovy и для тех, кто не очень. Поэтому мы не будем в это погружаться, а просто выберем `Hello World`. Оставим это простым для нашего первого опыта.