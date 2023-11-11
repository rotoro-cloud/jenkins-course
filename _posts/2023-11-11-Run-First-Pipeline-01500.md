---
layout: article
---
Ниже пункт Preserve stashes from completed builds. Для передачи файлов между stages в Jenkins есть механизм stashes. Это действует только внутри отдельного пайплайна в рамках запущенного экземпляра сборки. Т.о. у нас не получится экспортировать эти файлы в другие конвейеры или другие запуски этого же конвейера. Но иногда эти файлы могут быть полезны при перезапуске того же пайплайна, ускоряя его работу.