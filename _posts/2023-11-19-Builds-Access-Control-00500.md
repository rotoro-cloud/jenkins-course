---
layout: article
---
Обрати внимание, связка с `Authorize Project` имеет ограничения в части работы с `Multibranch Pipelines`. Если ты используешь репо с несколькими ветками, стоит посмотреть в сторону  `Project-based Authorization Strategy` или использовать какую-то замену для `Authorize Project`.

Я не буду вдаваться в настройки этого здесь, в курсе для новичков. Это сложно, поскольку секьюрность настраивается под конкретные процессы и в ней всегда присутствуют компромиссы. Слишком много тонкостей, которые потянут новые вопросы и могут смутить новичка. Вообще, темы безопасности обычно одни из самых сложных. 

Но я бы хотел дать небольшую подсказку, как начать осваивать настройки плагинов самостоятельно. В Jenkins есть классный плагин `Configuration as Code`, он помогает сохранять и восстанавливать конфигурации в yaml-формате. Ты можешь поставить его, а в репозитории плагина есть множество образцов настроек для разных плагинов Jenkins. Попробуй импортировать конфиги в свою среду и посмотри, как это настраивается.

Что же, извини, если это было сложно. Увидимся!