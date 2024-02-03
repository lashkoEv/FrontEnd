import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private toDoService: ToDoService) {}

  add(value: string) {
    this.toDoService.add(value);
    console.log(this.toDoService.getTasks());
  }

  sort(sort: string) {
    sort === 'desc'
      ? this.toDoService.sort(true)
      : this.toDoService.sort(false);
  }

  filter(filter: string) {
    this.toDoService.filter(filter);
  }
}
