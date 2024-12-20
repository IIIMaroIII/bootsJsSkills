1. Общая информация

Разработать систему управления задачами с использованием TypeScript. Система должна позволять добавлять, удалять и просматривать задачи. Все взаимодействия с задачами должны обрабатываться через класс MyTaskManager, который будет реализовывать интерфейсы, определенные в файле типов.

2. Структура проекта

lua
Copy code
/project
|-- src
| |-- TaskManager
| | |-- TaskManager.ts // Логика класса
| | |-- TaskManagerTypes.ts // Файл типов
| | |-- index.ts // Файл реэкспорта
| |-- index.ts // Основной файл для запуска
| |-- utils.ts // Утилиты (по желанию) 3. Требования к функциональности

Определение интерфейсов (TaskManagerTypes.ts):
Определить интерфейс Task с двумя свойствами:
id: уникальный идентификатор задачи (тип number).
description: описание задачи (тип string).
Определить интерфейс TaskManager с тремя методами:
addTask(description: string): void: метод для добавления задачи, принимающий описание задачи как аргумент.
removeTask(taskId: number): void: метод для удаления задачи по её уникальному идентификатору.
listTasks(): void: метод для вывода списка текущих задач.
Реализация класса (TaskManager.ts):
Создать класс MyTaskManager, который будет реализовывать интерфейс TaskManager.
В классе должны быть следующие свойства:
tasks: массив объектов Task для хранения задач.
nextId: переменная для хранения следующего доступного идентификатора задачи.
Реализовать методы:
addTask(description: string): void: добавляет новую задачу в массив tasks, увеличивая nextId.
removeTask(taskId: number): void: удаляет задачу из массива по указанному идентификатору и выводит сообщение о результате.
listTasks(): void: выводит в консоль все текущие задачи.
Основной файл (index.ts):
Импортировать класс MyTaskManager из файла TaskManager.ts.
Создать экземпляр MyTaskManager.
Добавить несколько задач, включая проверку обработки ошибок (например, добавление пустой задачи).
Вывести текущие задачи в консоль.
Удалить одну задачу и проверить, что она была удалена, а затем вывести оставшиеся задачи. 4. Обработка ошибок

Все методы должны включать обработку ошибок:
Метод addTask должен проверять, что описание задачи не пустое.
Метод removeTask должен уведомлять, если задача с указанным идентификатором не найдена. 5. Примечания

Структура кода должна обеспечивать хорошую читаемость и поддержку.
Реэкспортировать классы и типы через отдельные файлы, чтобы упростить импорт в других частях проекта.
Следовать лучшим практикам по организации и типизации кода в TypeScript.
Заключение
Данное техническое задание описывает требования для разработки системы управления задачами, включая определение интерфейсов, реализацию классов и обработку ошибок. Код должен быть организован и легко поддерживаем. Если возникнут вопросы, необходимо их обсудить для уточнения требований.
