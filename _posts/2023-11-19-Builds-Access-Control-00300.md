---
layout: article
---
Универсальный способ здесь - максимально использовать плагины для управления сборками. Перейдем в плагины и поищем по слову `pipeline`. 

Как видишь, здесь много разных доступных вариантов для разных утилит. Мы можем интегрировать Ansible, AWS, Github, Docker, Maven. Это гораздо лучше, чем дать возможность пользователю вызывать инструменты напрямую, например через удаленную ssh-команду.

Ок, как правило разработчики и админы не являются злонамеренными. Но вот невнимательными запросто. Они могут закоммитить данные с доступом в git-репо или положить их в публичный бакет, или использовать еще 1001 способ скомпрометировать свой аккаунт. Таким образом, в руки злоумышленника может попасть доступ в репозиторий, в котором есть Jenkinsfile. Давай поговорим, чем грозит такая атака, и как от нее защититься.
