---
layout: article
---
Ок, мы нашли в индексе эти плагины. Как их установить? Очень просто. Зайдем на страницу плагина, и справа вверху будет кнопка `How to install`, нажав на которую мы получим три инструкции для трех вариантов установки:
-	первый через GUI, как мы делали в начале
-	второй через CLI
-	третий скачать плагин в формате hpi-файла, который потом можно загрузить в Jenkins вручную через `Advanced installation`.

Прежде чем мы закончим, я хочу обратить твое внимание, что большинство плагинов можно установить без перезагрузки Jenkins. Т.е. просто скачать, они включатся, и нам можно продолжать работать. Но для некоторых плагинов может понадобиться рестарт.

Давай я покажу, как поставить плагин `telegram-notifications:1.4.0` через Jenkins CLI.

Я запущу такую команду на своем терминале, куда я предварительно скачал jar с командной строкой Jenkins:
```
java -jar jenkins-cli.jar -s http://158.160.98.100:8080/ -auth admin:11c86545c710805e5110d834d65bce485d install-plugin telegram-notifications:1.4.0 -restart
```
