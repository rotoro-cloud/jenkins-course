---
layout: article
---
Проверю веб-интерфейс. Как видишь, контроллер пока не доступен - он перезагружается. Это из-за того, что я добавил в команду флаг `-restart`. Это заставило Jenkins уйти на рестарт. Перезагрузить контроллер можно несколькими способами. Три из них мы уже видели: два варианта доступны при установке плагинов, третий при активации API `/restart`.

Также есть безотказный способ при помощи `systemctl restart jenkins` или `service jenkins restart`. Потом следует проверить статус службы и дождаться загрузки Jenkins. При знакомстве с Jenkins ты будешь часто заниматься его перезагрузкой, в учебных сетапах это обычное дело.

Итак, контроллер снова в строю, и я поищу в установленных плагинах по слову `tele`. Как видишь `Telegram Bot Plugin` числится установленным.

Это все об установке, увидимся!
