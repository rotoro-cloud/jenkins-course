---
layout: article
---
Перейдя по `Install a plugin`, мы попадаем в раздел `Clouds`, где видим разных клауд-вендоров: `AWS`, `Oracle`, `Azure`. Еще мы видим `Kubernetes` и `Docker`, которые не являются облачными провайдерами.

Дело в том, что в разделе облаков в Jenkins находится то, что можно использовать для динамического создания агентов. Таким образом, мы можем отказаться от постоянных агентов в пользу динамических и арендовать под эти нужды инстанс в облаке или контейнер в системе оркестрации в автоматической манере.

Давай коротенько рассмотрим эти варианты. Я установлю здесь три плагина:
- `JClouds`
- `Docker`
- `Amazon EC2`

После установки перейду обратно в раздел `Сlouds`. Как видишь, здесь есть изменения.
