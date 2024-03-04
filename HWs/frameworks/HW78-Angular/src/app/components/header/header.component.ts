import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private taskService: TaskService) {}

  changeFilter(data: any) {
    this.taskService.setFilter(data);
  }

  changeSort(data: any) {
    this.taskService.setSort(data);
  }

  getRouterLinks() {
    return [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/broken',
        title: 'Broken plans',
      },
    ];
  }
}
