---
layout: article
---
В этой секции также множество параметров.

Здесь в начале есть пункт `Disable remember me`, что заставит каждый раз пользователя перезаходить по истечению времени сессии.

Далее раздел `Security Realm`, это относится к тому, кто управляет пользователями.

Сейчас это сам Jenkins, но мы можем передоверить это стороннему провайдеру, или использовать пользователей низлежащего linux-хоста, или брать юзеров из Tomcat, если Jenkins работает в виде сервлета.

Тут еще есть прикольный пункт `None`. Но мне не доводилось его использовать.

Ниже раздел авторизации, мы его уже затронули. Сейчас у нас настроено в виде `RBAC`, т.е. контроль доступа на основе ролей.

Я думаю об этом, как о политическом строе.

Мы можем установить анархию на нашем сервере, чтобы любой мог делать что угодно. Можно устроить авторитаризм, когда только админ может все, что захочет.

Можем сделать самоуправление, настроив матрицу, т.е. контроль доступа на основе атрибутов.