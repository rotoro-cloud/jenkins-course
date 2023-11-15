---
layout: article
---
Здесь у меня список всех пайплайнов, я выберу `build-in-docker`, чтобы узнать его детали.

Теперь передо мной таблица со сборками этого конвейера, я могу узнать, из каких веток это было собрано, пуллреквесты и т.д. Пока здесь пусто, т.к. информация доступна лишь с `multibranch pipelines`.

Из этого дэшборда мы можем запустить, перезапустить и отключить пайплайн. Если кликнуть по строке билда, мы попадаем в визуальное представление его стадий, откуда можно увидеть, что именно происходило в его stages и в их steps.

Шаги сгруппированы под катами. Как видишь, сначала система собрала наш докер-образ, добавив пакет `build-base`, далее код нашего приложения был извлечен из GitHub, а потом были запущены тесты.

Отсюда мы можем перезапустить эту стадию `test`, просмотреть и скачать логи сборки, что необходимо нам для траблшутинга пайплайна.