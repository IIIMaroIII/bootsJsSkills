/project
|-- src
| |-- TaskManager
| | |-- TaskManager.ts // Логика класса
| | |-- TaskManagerTypes.ts // Файл типов
| | |-- index.ts // Файл реэкспорта
| |-- index.ts // Основной файл для запуска
| |-- utils.ts // Утилиты (по желанию)

1. Создание файла типов TaskManagerTypes.ts
   Мы определим интерфейсы и типы для системы управления задачами.

// src/TaskManagerTypes.ts

// Определяем интерфейс для задач
export interface Task {
id: number; // Уникальный идентификатор задачи
description: string; // Описание задачи
}

// Определяем интерфейс для менеджера задач
export interface TaskManager {
addTask(description: string): void; // Метод добавления задачи принимает только описание
removeTask(taskId: number): void; // Метод для удаления задачи
listTasks(): void; // Метод для вывода текущих задач

2. Реализация класса TaskManager
   Создадим класс TaskManager, используя интерфейсы из файла типов. Мы добавим обработку ошибок и улучшим логику.

// src/TaskManager.ts

import { Task, TaskManager } from './TaskManagerTypes';

class MyTaskManager implements TaskManager {
private tasks: Task[]; // Массив для хранения задач
private nextId: number; // Уникальный идентификатор для задач

constructor() {
this.tasks = [];
this.nextId = 1; // Инициализируем следующий идентификатор
}

// Метод для добавления задачи
addTask(description: string): void {
if (!description) {
console.error("Task description cannot be empty."); // Обработка ошибок
return;
}

    const newTask: Task = { id: this.nextId++, description }; // Добавляем уникальный ID
    this.tasks.push(newTask);
    console.log(`Task added: ${newTask.description}`);

}

// Метод для удаления задачи
removeTask(taskId: number): void {
const initialLength = this.tasks.length;
this.tasks = this.tasks.filter(task => task.id !== taskId);

    if (this.tasks.length === initialLength) {
      console.warn(`Task with ID ${taskId} not found.`); // Уведомление, если задача не найдена
    } else {
      console.log(`Task with ID ${taskId} removed.`);
    }

}

// Метод для вывода текущих задач
listTasks(): void {
if (this.tasks.length === 0) {
console.log("No tasks available.");
return;
}

    console.log("Current tasks:");
    this.tasks.forEach(task => {
      console.log(`ID: ${task.id}, Description: ${task.description}`);
    });

}
}

// Экспортируем класс
export default MyTaskManager;

3. Основной файл index.ts
   Теперь используем класс MyTaskManager в основном файле.

// src/index.ts

import MyTaskManager from './TaskManager';

const taskManager = new MyTaskManager();

// Добавление задач
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Practice JavaScript");
taskManager.addTask(""); // Проверка обработки ошибок

// Вывод текущих задач
taskManager.listTasks();

// Удаление задач
taskManager.removeTask(1); // Удаляет задачу с ID 1
taskManager.removeTask(10); // Проверка на случай, если задача не найдена

// Вывод оставшихся задач
taskManager.listTasks();
