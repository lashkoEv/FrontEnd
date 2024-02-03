import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private toDoService: ToDoService) {}

  getTasks() {
    return this.toDoService.getTasks();
  }
}
