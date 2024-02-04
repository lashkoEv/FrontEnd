import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private categories = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Burgers',
      path: '/burgers',
    },
    {
      title: 'Pizzas',
      path: '/pizzas',
    },
    {
      title: 'Tacos',
      path: '/tacos',
    },
    {
      title: 'Log In',
      path: '/authorize',
    },
  ];

  constructor(private userService: UserService) {}

  getCategories() {
    return this.categories;
  }

  isAuth() {
    return this.userService.isAuthorized();
  }

  getRouteToAdminPanel() {
    return '/admin';
  }
}
