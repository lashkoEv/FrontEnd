import { Component, Input } from '@angular/core';
import { Task, ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  private tasks: Task[];
  public inputValue: string = '';

  constructor(private todo: ToDoListService) {
    this.tasks = [];
    this.refresh();
  }

  deleteTask(id: number) {
    this.todo.delete(id);
  }

  refresh() {
    this.tasks = this.todo.getAll();
    console.log(this.tasks);
  }

  getTasks() {
    return this.tasks;
  }

  addTask() {
    this.todo.add({
      id: this.todo.getAll().length,
      description: this.inputValue,
      date: new Date(),
      status: 'to do',
    });
  }

  public readValue(newValue) {
    this.inputValue = newValue.value;
  }
}
