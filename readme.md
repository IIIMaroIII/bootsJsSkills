Основные команды gh

Авторизация и настройка:

- gh auth login # Войти в GitHub через CLI
- gh auth logout # Выйти из GitHub через CLI
- gh auth status # Проверить текущий статус авторизации
- gh config set editor nano # Задать текстовый редактор для CLI
- gh repo clone <repo> # Клонировать репозиторий

Работа с репозиториями:

- gh repo create # Создать новый репозиторий
- gh repo clone <repo> # Клонировать существующий репозиторий
- gh repo fork <repo> # Форкнуть репозиторий
- gh repo view # Просмотреть репозиторий (детали)
- gh repo list # Список репозиториев
- gh repo archive # Архивировать репозиторий
- gh repo delete # Удалить репозиторий

Pull Requests (PRs):

- gh pr create # Создать pull request
- gh pr view <number> # Просмотреть детали PR
- gh pr list # Список открытых PR в репозитории
- gh pr checkout <number> # Переключиться на ветку PR
- gh pr merge <number> # Объединить PR
- gh pr close <number> # Закрыть PR

Issues:

- gh issue create # Создать новую issue
- gh issue view <number> # Просмотреть детали issue
- gh issue list # Список issues в репозитории
- gh issue close <number> # Закрыть issue

Работа с ветками:

- gh branch create <branch_name> # Создать новую ветку
- gh branch delete <branch_name> # Удалить ветку
- gh branch list # Список веток

Управление обговоркой:

- gh run list # Список последних GitHub Actions
- gh run view <run_id> # Просмотреть детали определённого действия
- gh run watch <run_id> # Просмотр выполнения действия в реальном времени
- gh run rerun <run_id> # Перезапустить действие

Управление проектами:

- gh project create <name> # Создать проект
- gh project list # Список проектов
- gh project view <number> # Просмотреть проект
- gh project delete <number> # Удалить проект

Управление релизами:

- gh release create <tag> # Создать релиз
- gh release list # Список релизов
- gh release view <tag> # Просмотреть релиз
- gh release delete <tag> # Удалить релиз
  Примеры часто используемых команд

Создание и просмотр pull request:

- gh pr create --title "New Feature" --body "Description of the new feature"
- gh pr view 123 --web # Открыть PR в браузере

Просмотр текущей задачи:

- gh issue view 45

Запуск и проверка действия (GitHub Actions):

- gh run view <run_id>
- gh run watch <run_id>

- Порядок создания и слияния pull request через gh

Создание новой ветки и добавление изменений
Сначала создайте новую ветку и внесите изменения в код:
git checkout -b feature-branch # Создайте новую ветку

# Внесите изменения в код

git add . # Добавьте изменения в индекс
git commit -m "Добавить новую функциональность" # Зафиксируйте изменения
git push -u origin feature-branch # Отправьте ветку на удалённый репозиторий

Создание pull request
После того как изменения отправлены на GitHub, создайте pull request с помощью команды:

- gh pr create --title "Добавление новой функциональности" --body "Описание изменений"
  В процессе создания GitHub CLI спросит, хотите ли вы открыть pull request в браузере или завершить его создание в терминале.

Просмотр списка открытых pull requests
Вы можете просмотреть список всех открытых pull requests в репозитории с помощью:

- gh pr list
  Это позволяет вам убедиться, что pull request был успешно создан и ожидает проверки.

Просмотр деталей pull request
Чтобы посмотреть детали конкретного pull request, используйте команду:

- gh pr view <номер_или_URL_PR>
  Здесь можно указать номер или URL pull request для просмотра подробностей.

Проверка кода pull request
Вы можете переключиться на ветку, относящуюся к pull request, чтобы протестировать изменения локально:

- gh pr checkout <номер_или_URL_PR>

Слияние pull request
После проверки вы можете слить pull request, используя команду:

- gh pr merge <номер_или_URL_PR>
  При слиянии GitHub CLI спросит, какой тип слияния вы хотите выполнить:

Merge — обычное слияние.
Squash — объединение коммитов в один перед слиянием.
Rebase — переписывание истории и перемещение коммитов поверх основной ветки.

Если хотите выбрать вариант слияния сразу, можно использовать флаг --merge, --squash или --rebase. Например:

- gh pr merge <номер_или_URL_PR> --squash

Закрытие pull request без слияния
Если вы решили закрыть pull request без слияния, используйте:

- gh pr close <номер_или_URL_PR>
- Подсказки по работе с pull requests через gh

Автоматизация с параметрами: Например, можно объединить PR и автоматически удалить ветку после слияния:

- gh pr merge <номер_или_URL_PR> --squash --delete-branch

Уведомления: Вы можете использовать флаг --web для открытия любого действия в браузере, например:

- gh pr view <номер_или_URL_PR> --web
