import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
})
export class AuthorizationComponent {
  constructor(private userService: UserService, private router: Router) {}

  authorize(data: any) {
    this.userService.authorize(data.login, data.password);

    if (this.userService.isAuthorized()) {
      this.router.navigate(['/admin']);
    }
  }
}
