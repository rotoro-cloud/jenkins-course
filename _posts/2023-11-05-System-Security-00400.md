---
layout: article
---
Далее идет настройка параметров для представления времени. От этого зависит, как это будет отображаться в логах сборок.

Потом идет `Fingerprint` - такая база зависимостей проектов и их сборок. Помогает в отслеживании зависимостей.

`Administrative monitors configuration` - это важные системные уведомления. Иногда некоторые из них требуется выключить, и это можно сделать отсюда.

Что касается настроек плагинов - вот одна для **TelegramBot**. Как ты помнишь, его мы поставили отдельно. Сюда нужно добавить имя и токен, чтобы плагин начал отсылать сообщения. После идут настройки для серверов Gitea и Github-серверы для плагина Github.

Плагин `Github` позволяет нам пуллить из удаленных репозиториев на Github и пушить в них. Работа с репозиториями на Github очень популярный кейс и плагины для Github идут с начальной установкой. Мы можем настроить стратегию ограничения скорости использования GitHub для любых запросов pull и push. Еще можем настроить корпоративные серверы GitHub, конвейерные библиотеки.

Дальше плагин Git. Именно он взаимодействует с системой управления версиями. У него достаточно много настроек, т.к. это универсальный плагин.
