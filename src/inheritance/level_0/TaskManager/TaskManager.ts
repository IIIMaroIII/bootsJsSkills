import { TaskManagerTypes, TaskTypes } from "./TaskManagerTypes";

class TaskManager implements TaskManagerTypes {
  private tasks: TaskTypes[];
  private nexId: TaskTypes["id"];

  constructor() {
    this.tasks = [];
    this.nexId = 1;
  }
  addTask(name: TaskTypes["name"]): void {
    console.log(`Im working on adding a task ${name}`);
  }
  removeTask(id: TaskTypes["id"]): void {
    console.log(`The task with id ${id} } was removed`);
  }
  getListTasks(): void {
    console.log("this.tasks", this.tasks);
  }
}

export default TaskManager;
