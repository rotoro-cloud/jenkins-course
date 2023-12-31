---
layout: article
---
Параметр **Use Groovy Sandbox** ограничивает функциональность Groovy, чтобы рядовой пользователь не повредил наш CI/CD сетап. Пара слов о `Groovy`. По сути, это такой скриптовый язык, который на самом деле считается языком программирования. Обычно скриптовые языки исполняет интерпретатор, но в случае с Groovy происходит динамическая компиляция в байт-код для `JVM`. Таким образом можно думать о нем как о расширении для функций Java, которое ориентировано на написание скриптов. На самом деле возможностей у Groovy гораздо больше.

Если тебе интересна тема Groovy в Jenkins, посмотри в документации страницу `https://www.jenkins.io/doc/book/managing/script-console`. По мере погружения в это, становится понятно, что декларативная среда пайплайнов - это такая толстая обертка над скриптовой частью. В этой декларативной среде нам гораздо удобнее работать, но приходится принимать некоторые ограничения.
