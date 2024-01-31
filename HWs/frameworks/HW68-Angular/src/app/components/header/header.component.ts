import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private login: string;

  constructor(
    private authService: AuthorizationService,
    private userService: UserService
  ) {
    this.login = this.userService.getCurrentUser().getLogin();
  }

  logout() {
    this.authService.changeVisibility();
  }

  getLogin() {
    return this.login;
  }

  logUsers() {
    console.log(this.userService.getAll());
  }
}
