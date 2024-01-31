import { UserService } from './../../services/user.service';
import { AuthorizationService } from './../../services/authorization.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrl: './authorization-form.component.css',
})
export class AuthorizationFormComponent {
  constructor(
    private authService: AuthorizationService,
    private userService: UserService
  ) {}

  getVisibility() {
    return this.authService.getVisibility();
  }

  onSubmitHandler(data: any) {
    const isAuthorized = this.userService.authorize(data.login, data.password);

    if (isAuthorized) {
      this.authService.changeVisibility();
    }
  }
}
