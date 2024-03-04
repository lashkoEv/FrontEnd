import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITask } from '../interfaces/ITask';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private currentTask: ITask | undefined;
  private filterMode: string | undefined;
  private sortMode: string | undefined;
  private toShow: Observable<ITask[]>;
  private length: number;
  private pageSize: number;
  private currentPage: number;

  private tasksSubj: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>(
    []
  );

  constructor() {
    this.add('First task!');
    this.add('Second task...');
    this.pageSize = 3;
    this.currentPage = 1;
    this.setShown();
  }

  setCurrentTask(task: ITask) {
    this.currentTask = task;
  }

  getCurrentTask() {
    return {
      id: this.currentTask.id,
      title: this.currentTask.title,
      date: this.currentTask.date,
      status: this.currentTask.status,
    };
  }

  public getAll() {
    return this.toShow;
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

    this.setShown();
  }

  public remove(id: String) {
    const tasksValues = this.tasksSubj.value;

    const updatedTasks = tasksValues.filter((task) => task.id !== id);

    this.tasksSubj.next(updatedTasks);

    this.setShown();
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

    this.setShown();
  }

  public setFilter(mode: string) {
    if (mode !== 'default') {
      this.filterMode = mode;
    } else {
      this.filterMode = undefined;
    }

    this.setShown();
  }

  private filter(tasksValues: ITask[]) {
    const filteredTasks = [...tasksValues].filter(
      (task) => task.status === this.filterMode
    );

    return filteredTasks;
  }

  public setSort(mode: string) {
    this.sortMode = mode;

    this.setShown();
  }

  private sort(tasksValues: ITask[]) {
    const sortedTasks = [...tasksValues].sort((a, b) => {
      switch (this.sortMode) {
        case 'asc':
          return a.date.getTime() - b.date.getTime();
        case 'desc':
          return b.date.getTime() - a.date.getTime();
        default:
          return 0;
      }
    });

    return sortedTasks;
  }

  private setShown() {
    let tasksValues = this.tasksSubj.value;

    if (this.filterMode) {
      tasksValues = this.filter(tasksValues);
    }

    if (this.sortMode) {
      tasksValues = this.sort(tasksValues);
    }

    tasksValues = this.pagination(tasksValues);

    this.toShow = of(tasksValues);
  }

  pagination(tasksValues: ITask[]) {
    this.length = tasksValues.length;

    const start = (this.currentPage - 1) * this.pageSize;

    const end = start + this.pageSize;

    return tasksValues.slice(start, end);
  }

  getLength() {
    return this.length;
  }

  getPageSize() {
    return this.pageSize;
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.setShown();
  }

  getBrokenPlans() {
    const dayMilliseconds = 24 * 60 * 60 * 1000;

    let tasksValues = this.tasksSubj.value;

    const filteredTasks = [...tasksValues].filter(
      (task) =>
        task.date.getTime() <= new Date().getTime() - dayMilliseconds * 3 &&
        task.status !== 'Done'
    );

    return of(filteredTasks);
  }
}
