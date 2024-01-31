import { Component } from '@angular/core';
import { Message, User } from './schemas';
import { AuthorizationService } from './services/authorization.service';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HW68-Angular';

  constructor(private authService: AuthorizationService) {
    const users = this.initUsers();
    this.initMessages(users);
  }

  initUsers() {
    const users = [
      new User('q', 'q'),
      new User('user1', 'pass'),
      new User('user2', 'pass'),
      new User('user3', 'pass'),
      new User('user4', 'pass'),
      new User('user5', 'pass'),
    ];

    localStorage.setItem('users', JSON.stringify(users));

    return users;
  }

  initMessages(users: IUser[]) {
    const messages = [
      new Message(users[1], users[0], new Date(), 'first msg from user 1'),
      new Message(users[2], users[0], new Date(), 'first msg from user 2'),
      new Message(users[3], users[0], new Date(), 'first msg from user 3'),
      new Message(users[4], users[0], new Date(), 'first msg from user 4'),
      new Message(users[5], users[0], new Date(), 'first msg from user 5'),
    ];

    localStorage.setItem('messages', JSON.stringify(messages));
  }

  getVisibility() {
    return !this.authService.getVisibility();
  }
}
