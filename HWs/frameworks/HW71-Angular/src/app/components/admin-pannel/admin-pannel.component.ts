import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrl: './admin-pannel.component.css',
})
export class AdminPannelComponent {
  constructor(
    private formService: FormService,
    private userService: UserService
  ) {}

  changeVisibilityProduct() {
    this.formService.changeVisibilityProduct();
  }
  changeVisibilityUser() {
    this.formService.changeVisibilityUser();
  }

  getUsers() {
    return this.userService.getAll();
  }
}
