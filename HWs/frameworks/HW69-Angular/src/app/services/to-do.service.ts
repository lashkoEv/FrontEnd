import { Status } from './../enums/Status';
import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/ITask';
import { Task } from '../schemas/Task';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private tasks: ITask[];

  private toShow: ITask[];

  constructor() {
    this.tasks = [];
    this.toShow = [];
    this.init();
  }

  private init() {
    this.tasks.push(
      new Task(this.tasks.length, 'First task', new Date(), Status.ToDo)
    );
    this.tasks.push(
      new Task(this.tasks.length, 'Second task', new Date(), Status.InProgress)
    );
    this.tasks.push(
      new Task(this.tasks.length, 'Third task', new Date(), Status.Done)
    );
    this.filter('');
  }

  add(description: string) {
    this.tasks.push(
      new Task(this.tasks.length, description, new Date(), Status.ToDo)
    );

    this.filter('');
  }

  getTasks() {
    return this.toShow;
  }

  sort(byDate: boolean) {
    if (byDate) {
      this.toShow = this.toShow.sort((a, b) =>
        a.getDate() <= b.getDate() ? 1 : -1
      );
    } else {
      this.toShow = [...this.tasks];
    }
  }

  filter(by: string) {
    switch (by) {
      case 'todo': {
        this.toShow = this.tasks.filter(
          (task) => task.getStatus() === Status.ToDo
        );
        break;
      }
      case 'inProgress': {
        this.toShow = this.tasks.filter(
          (task) => task.getStatus() === Status.InProgress
        );
        break;
      }
      case 'done': {
        this.toShow = this.tasks.filter(
          (task) => task.getStatus() === Status.Done
        );
        break;
      }
      default: {
        this.toShow = [...this.tasks];
      }
    }
  }
}
