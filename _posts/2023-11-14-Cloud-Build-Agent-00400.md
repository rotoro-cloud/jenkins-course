---
layout: article
---
Появилась опция `New cloud`. Выберу ее, далее `JClouds` и назову ее `openstack`.

Я попал в новый диалог создания облака. Здеcь мы можем добавить свои облачные креденшилс, ssh-ключи, указать AMI, настройки и все остальное, что требуется для создания облачной виртуальной машины.

Таким образом, после создания задания Jenkins самостоятельно сходит в облако и создаст агента в виртуальной машине. Это работает благодаря плагину `JClouds`. Он поддерживает много облаков. Также он является базовым плагином, т.е. на его основе сделаны другие плагины, которые заточены под определенное облако.

Например, если мы хотим работать только с облаком `VK Cloud`, мы можем установить более узкоспециализированный плагин. Они работают на **openstack**, соответственно нам стоит дополнительно поставить плагин `Openstack`, и с ним настройки будет еще меньше.
