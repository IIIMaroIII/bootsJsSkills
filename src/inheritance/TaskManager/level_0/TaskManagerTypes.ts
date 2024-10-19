export interface ITask {
  id: number;
  description: string;
}

export interface ITaskManager {
  addTask(description: ITask["description"]): this;
  removeTask(id: ITask["id"]): this;
  getListTasks(): ITask[];
  getNextId(): this;
  clearList(): this;
}
