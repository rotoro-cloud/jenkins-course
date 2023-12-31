---
layout: article
---
Обрати внимание, что здесь примерно то же самое. Также основой является **pipeline**, в нем блок **stages**, в котором одна **stage** с названием `build`. В ней один **step**, который имеет другую команду - `git`. В отличие от первого файла, этот при своей работе не выводит фразу в поток вывода, а обращается на `GitHub` и забирает оттуда код.

Клонирование репо - это уже что-то более ценное для нас, чем когда он что-то писал на экран. Но почему такой синтаксис? Где команда `git clone`?

Как мы уже говорили, эти команды совсем не те команды, которые мы пишем в терминале. `git` и `echo` - это названия модулей в Jenkins, которые исполняют определенные функции. Поэтому нам не нужно указывать дополнительные команды вроде `clone`, поскольку по умолчанию плагин `git` своей командой клонирует репо.

Ок, эта stage берет код с GitHub и размещает его внутри сервера-агента. Теперь самое время что-то сделать с этим кодом. Например собрать из него что-то работающее. Или протестировать его на правильность работы. Или проверить на безопасность. Давай посмотрим, как этого добиться.
