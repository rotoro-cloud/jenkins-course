---
layout: article
---
Далее заключительный блок. Сначала защита от `CSRF`. Для того, чтобы запрос не подменили, Jenkins посылает пользователю дополнительный токен. Вот здесь это можно выключить.

Ниже идут настройки для разрешения `git hooks`. Лучше не включать их, если сборка производится на контроллере, на агентах без проблем. 

После идёт отключение сообщений безопасности - мы уже этим пользовались ранее в курсе.

Далее несколько пунктов про API. Это может быть полезно, если у тебя используются старые API Tokens.

После идет возможность поднять внутренний SSH-сервер, который реализует сам Jenkins, и в котором ты можешь запускать его команды через CLI. Мы выставили его в порт `9595` в одном из демо.

В конце настройка проверки ssh-ключей плагином git.

Подобно разделу `System`, здесь много опций-настроек созданы плагинами. Поэтому после установки новых или удалении существующих плагинов это место будет меняться.

Что же, на этом лекция закончилась. Увидимся в следующей.
