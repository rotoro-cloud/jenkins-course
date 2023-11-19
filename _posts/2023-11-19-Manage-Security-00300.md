---
layout: article
---
Во-вторых, в `Manage Jenkins` есть целый раздел, который так и называется `Security`.

Там в секции `Security` находятся глобальные настройки безопасности. Именно сюда плагины выносят свои настройки, следовательно это место определяет, по каким законам будет жить этот сервер Jenkins. И чем больше плагинов, тем шире этот раздел.

Сейчас здесь есть пункт про аутентификацию, где можно настроить сервер так, чтобы сессии не запоминались. Например, ты входишь в систему через google-аккаунт, сервер тебя запомнит. Это может быть риском в безопасности, если кто-то получит доступ к браузеру вошедшего пользователя и сможет подменить сессию. Вместо этого, пользователю придется каждый раз вводить имя пользователя и пароль.

Далее в разделе `Security Realm` у нас есть несколько опций.

- Делегирование контейнеру сервлетов. Подходит, если war-файл Jenkins запускает веб-сервер. Он передает данные о пользователе, которого ранее уже аутентифицировал веб-сервер. Вот этим мы можем заставить Jenkins доверять этой информации.
который является контейнером для аутентификации пользователей.
- Своя база. Я видел такое только в очень небольших организациях, поскольку, если таких таких пользователей много, их сложно обслуживать. Обычно от этого уходят. Интересно, что здесь даже можно настроить так, чтобы пользователи сами могли зарегистрироваться. Получится такой публичный Jenkins.
- Далее LDAP, это похоже на реальный мир, но для тех, кто использует `Active Directory` есть специальный плагин, с ним проще работать.
- После этого опция для использования базы пользователей с этого хоста. Т.е. если ты знаешь пользователя/пароль этого хоста, то сможешь сюда заходить. Для небольших установок тоже вполне себе.
- Финальный пункт `None`. С этой настройкой Jenkins не будет брать пользователей ниоткуда. Он перестанет спрашивать про имя пользователя при логине.