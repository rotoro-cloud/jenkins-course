---
layout: article
---
Далее GitHub hook trigger for GITScm polling. Этот триггер не стандартный, он от плагина Github. Его назначение в том, чтобы запускать job по событию, произошедшему на Github. Скажем, мы сделали push изменений в свой репозиторий. Мы бы хотели, чтобы при таком событии выполнялась сборка данного конвейера в Jenkins. Можно настроить плагин Github, чтобы он получал сигнал от репозитория через веб-хук, после чего проверял репо и запускал эту job.