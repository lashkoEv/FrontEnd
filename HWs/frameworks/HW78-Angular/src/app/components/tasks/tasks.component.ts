import { Component } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { TaskService } from '../../services/task.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(
    private taskService: TaskService,
    private formService: FormService
  ) {
    taskService.add('1');
    taskService.add('2');
  }

  public change(event: any) {
    this.taskService.changePage(event);
  }

  getTasks() {
    return this.taskService.getAll();
  }

  getLength() {
    return this.taskService.getLength();
  }

  getPageSize() {
    return this.taskService.getPageSize();
  }

  remove(id: String) {
    this.taskService.remove(id);
  }

  edit(task: ITask) {
    this.taskService.setCurrentTask(task);
    this.formService.changeVisibility();
  }
}
