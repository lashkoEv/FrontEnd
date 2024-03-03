import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private taskService: TaskService) {}

  add(data: any) {
    if (data.title) {
      this.taskService.add(data.title);
    }
  }
}
