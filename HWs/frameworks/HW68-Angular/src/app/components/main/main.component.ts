import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private userService: UserService) {}

  getUsers() {
    return this.userService.getAllExceptCurrentUser();
  }
}
