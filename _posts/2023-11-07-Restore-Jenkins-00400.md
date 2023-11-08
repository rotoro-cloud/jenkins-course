---
layout: article
---
Сначала я проверю папку плагинов. Ой, я такого не планировал - плагины не восстановлены. Чтобы проверить, что там не так, нужно просмотреть логи Jenkins.

У меня ОС с `systemd`, поэтому ввожу `sudo journalctl -u jenkins`.

В системах с другими инит-процессами я бы поискал файл `/var/log/jenkins/jenkins.log`.

Ок, здесь в конце я вижу фразу `Could not restore`. При восстановлении возникли проблемы. Но что именно - об этом ни слова. Как это отдебажить?

Плагин в Linux работает по пользователем `jenkins`, зайду под ним при помощи `su jenkins`.

Теперь попробую вручную сделать то, что делает плагин - скопировать бэкап в `$JENKINS_HOME`. 

Пишу `cp -r /jenkinsbackup/FULL-2023-11-02_17-59/* /var/lib/jenkins/`.

В ответ получаю `cp: cannot create regular file '/var/lib/jenkins/locale.xml`.

Видимо что-то с правами. Делаю `ls -al /var/lib/jenkins/locale.xml`. Как видишь, файл `locale.xml` принадлежит юзеру `root` и не дает другим записывать в себя. Установлю новые владельца на `jenkins` рекурсивно для всех файлов каталога.