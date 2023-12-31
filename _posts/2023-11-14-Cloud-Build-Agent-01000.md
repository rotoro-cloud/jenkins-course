---
layout: article
---
Ок, мы почти в конце демо, но прежде чем закончить, я обращу твое внимание на одну деталь. В настройках плагина мы можем выставить автоматическое уничтожение агента, стоящего без дела. По умолчанию это 30 минут. Таким образом, облачный инстанс будет работать и ожидать задания. Если их не будет в этот промежуток, то Jenkins уничтожит его.

Давай сделаем это, т.е. уничтожим инстанс, самостоятельно. Иду в `Manage Jenkins -> Nodes`. `Clouds` отвечают за динамические создание агентов, но уже созданные находятся в `Nodes`. Здесь я вижу всех агентов, привязанных к системе. У меня их два - сам контроллер и облачный инстанс.

Зайду в EC2-агент и там нажму `Disconnect`. Далее удалю агента. Теперь, перейдя в облако, я вижу что виртуальная машина в состоянии уничтожения.

Что же, это все в этом демо. Настройка с AWS видимо самая простая из динамических агентов. Я бы не сказал, что остальные плагины для облаков сложнее, просто в них больше дополнительных операций. Т.е. с ними приходится дольше возится и больше шансов ошибиться. Увидимся!
