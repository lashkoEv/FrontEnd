import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from '../interfaces/ITask';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubj: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>(
    []
  );

  private tasks: Observable<ITask[]> = this.tasksSubj.asObservable();

  constructor() {}

  public getTasks() {
    return this.tasksSubj;
  }

  public add(title: String) {
    const tasksValues = this.tasksSubj.value;

    const newTask: ITask = {
      id: v4(),
      title: title,
      date: new Date(),
      status: 'To Do',
    };

    this.tasksSubj.next([...tasksValues, newTask]);
  }

  public remove(id: String) {
    const tasksValues = this.tasksSubj.value;

    const updatedTasks = tasksValues.filter((task) => task.id !== id);

    this.tasksSubj.next(updatedTasks);
  }

  public edit(id: String, updatedTask: Partial<ITask>) {
    const tasksValues = this.tasksSubj.value;

    const updatedTasks = tasksValues.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });

    this.tasksSubj.next(updatedTasks);
  }
}
