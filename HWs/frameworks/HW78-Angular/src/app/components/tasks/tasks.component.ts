import { Component } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private tasks: Observable<ITask[]>;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();

    taskService.add('1');
    taskService.add('2');
  }

  getTasks() {
    return this.tasks;
  }

  remove(id: String) {
    this.taskService.remove(id);
  }

  edit(task: ITask) {}
}
