export interface TaskManagerTypes {
  addTask(name: TaskTypes["name"]): void;
  removeTask(id: TaskTypes["id"]): void;
  getListTasks(): void;
}

export interface TaskTypes {
  id: number;
  name: string;
}
