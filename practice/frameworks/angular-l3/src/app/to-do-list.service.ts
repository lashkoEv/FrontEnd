import { Injectable } from '@angular/core';

export type Task = {
  id: number;
  description: string;
  date: Date;
  status: string;
};

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private tasks: Task[];

  constructor() {
    this.tasks = [];

    this.tasks.push(
      {
        id: 0,
        description: 'First task',
        date: new Date(),
        status: 'to do',
      },
      {
        id: 1,
        description: 'Second task',
        date: new Date(),
        status: 'to do',
      },
      {
        id: 2,
        description: 'Third task',
        date: new Date(),
        status: 'in progress',
      }
    );
  }

  getAll() {
    return this.tasks;
  }

  add(task: Task) {
    this.tasks.push(task);
  }

  delete(id: number) {
    const found = this.getById(id);

    if (found === undefined) return;

    const index = this.tasks.indexOf(found);

    this.tasks.splice(index, 1);
  }

  getById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  update(newData: Task) {
    const found = this.getById(newData.id);

    if (found === undefined) return;

    found.date = new Date();
    found.description = newData.description;
    found.status = newData.status;
  }
}
