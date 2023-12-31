---
layout: article
---
Декларативный - самый поздний тип синтаксиса для конвейера. Скриптовый появился раньше, он основан на Groovy DSL, и ранее пайпланы в Jenkins писали на нем. Потом синтаксис сильно упростили. Сложность скриптовой манеры отпугивает разработчиков не знакомых с Groovy. Декларативный скрывает сложность.

Декларативный имеет ограничения по длине конвейера, также он имеет четкую и строгую структуру. Скриптовый вариант лишен этих недостатков, он предоставляет всю гибкость и расширяемость языка программирования Groovy для наших пайплайнов.

Они обратно `не совместимы`. В декларативном виде мы можем использовать скриптовые конструкции внутри блока `script`, но не наоборот. Если мы пишем скриптовый пайплайн, декларативные особенности нам недоступны.

Еще одно отличие в том, что в декларативном мы можем перезапустить пайплайн с определенной stage. В скриптовом нет такой особенности.

В декларативном режиме в Jenkins есть линтирование кода прямо в браузере. Еще оно доступно через CLI. В скриптовом об ошибке тебе может сказать IDE, но не всегда, часть из них мы узнаём только из свалившегося билда.

Для описания условных операторов в декларативной манере есть только конструкция `When`, которая может пропустить stage. Это не самый удобный механизм. Со скриптовым подходом мы можем использовать `if..else`, это универсальный и понятный механизм.

Есть отличия в переменных среды. В декларативном они имеют область видимости. В скриптовом они обычно глобальные для всех stages.

Для декларативного подхода есть специальных генератор директив, что снижает уровень вхождения в описание pipelines.

Наконец, большой плюс декларативного подхода в том, что с ним доступен `Blue Ocean`. В скриптовом - нет.

Как я уже упоминал, в курсе, где это возможно, мы используем декларативное описание.

Ок, это все, двигаемся дальше!
