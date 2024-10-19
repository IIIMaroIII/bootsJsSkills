// import { ITask, ITaskManager } from "./TaskManagerTypes";

// class TaskManager implements ITaskManager {
//   private nextId: number;
//   private tasks: ITask[];

//   constructor() {
//     this.nextId = 1;
//     this.tasks = [];
//   }
//   private validateQuery(q: ITask["description"]): boolean | null {
//     if (q.trim() !== "") {
//       return true;
//     }
//     console.error("Must not be empty!");
//     return null;
//   }
//   private idIdIncluded(id: ITask["id"]): boolean | null {
//     const idsArr = this.tasks.reduce((task: ITask, acc: []): [] => {
//       if (task.id === id) {
//         acc.push(id);
//       }
//     }, []);
//   }
//   addTask(description: ITask["description"]): this {
//     if (this.validateQuery(description)) {
//       this.tasks = [...this.tasks, { description, id: this.nextId }];
//       this.nextId += 1;
//     }
//     return this;
//   }
//   removeTask(id: ITask["id"]): this {
//     const idsArr = (this.tasks = this.tasks.filter((obj) => obj.id !== id));

//     return this;
//   }
//   getListTasks(): ITask[] {
//     return this.tasks;
//   }
//   getNextId(): this {
//     return this;
//   }
//   clearList(): this {
//     this.tasks = [];
//     return this;
//   }
// }

// export default TaskManager;
