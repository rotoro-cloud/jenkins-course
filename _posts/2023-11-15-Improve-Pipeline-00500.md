---
layout: article
---
Я нажму на значок шестеренки рядом с названием пайплайна. Это перенесет меня в настройки пайплайна. Здесь я жму слева на `Scan Repository Triggers`, и в пункте **Interval** установлю значение 5 минут. Теперь Jenkins будет синхронизирован с репо, и запустит билд, если увидит изменения. Это не очень экономичное решение, поскольку периодический polling репозитория сильно нагружает SCM.

Как видишь, в нашем интерфейсе появился новый билд. Зайдя в него, я вижу, что он успешно собирается в заказанном нами `golang 1-20`.

Что же, на этом всё. Давай продолжим и отправимся в лабораторную.
