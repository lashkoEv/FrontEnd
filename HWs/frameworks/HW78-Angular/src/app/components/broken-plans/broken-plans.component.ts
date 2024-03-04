import { Component } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { TaskService } from '../../services/task.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-broken-plans',
  templateUrl: './broken-plans.component.html',
  styleUrl: './broken-plans.component.css',
})
export class BrokenPlansComponent {
  constructor(
    private taskService: TaskService,
    private formService: FormService
  ) {}

  getTasks() {
    return this.taskService.getBrokenPlans();
  }

  remove(id: String) {
    this.taskService.remove(id);
  }

  edit(task: ITask) {
    this.taskService.setCurrentTask(task);
    this.formService.changeVisibility();
  }
}
