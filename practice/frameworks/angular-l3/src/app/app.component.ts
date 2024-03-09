import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(public todoListService: ToDoListService) {}

  getToDoListService() {
    return this.todoListService;
  }
  
  ngOnInit(): void {
    console.log(this.todoListService.getAll());
  }
}
