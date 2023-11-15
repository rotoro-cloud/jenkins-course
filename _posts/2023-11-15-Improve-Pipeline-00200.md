---
layout: article
---
Во-первых, на агенте (который на Ubuntu) потребуются инструменты сборки. Я запущу команду `apt install build-essential`.

Во-вторых, нам потребуется чтобы локаль агента поддерживала `UTF-8`. Для этого я перейду в настройки агента и там в `Launch method` под `Advanced` выставлю префикс команды запуска в `export LANG="en_US.UTF-8";`. Это установит переменную окружения для агентского java-процесса. Есть и другие варианты добиться этого результата, но этот самый простой.

Сохраняю, после делаю `Disconnect` для агента и сразу же `Launch agent`. В логах ты можешь видеть, что в строке запуска появилась инструкция экспорта переменной для языка.

Ок, теперь это должно работать, как задумано, двигаемся дальше.