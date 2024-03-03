import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../interfaces/ITask';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent {
  constructor(
    private taskService: TaskService,
    private formService: FormService
  ) {}

  getVisibility() {
    return this.formService.getVisibility();
  }

  getTask() {
    return this.taskService.getCurrentTask();
  }

  edit(data: any) {
    this.taskService.edit(this.taskService.getCurrentTask().id, data);
    this.formService.changeVisibility();
  }
}
