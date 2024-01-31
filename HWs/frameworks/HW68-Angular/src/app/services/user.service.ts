import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';
import { User } from '../schemas';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: IUser | null;

  private users: IUser[];

  constructor() {
    this.currentUser = null;

    this.users = [];

    this.load();
  }

  load() {
    const users = JSON.parse(localStorage.getItem('users'));

    for (const data of users) {
      this.users.push(new User(data.login, data.password));
    }

    for (let i = 0; i < this.users.length; i++) {
      for (const user of users[i].friends) {
        this.users[i].addFriend(
          this.getByLoginAndPassword(user.login, user.password)
        );
      }
    }
  }

  save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getByLoginAndPassword(login: string, password: string) {
    return this.users.find(
      (user) => user.getLogin() === login && user.getPassword() === password
    );
  }

  authorize(login: string, password: string) {
    const found = this.getByLoginAndPassword(login, password);

    if (found) {
      this.currentUser = found;
    }

    return this.currentUser;
  }

  getAll() {
    return [...this.users];
  }

  getAllExceptCurrentUser() {
    return [...this.users.filter((user) => user !== this.currentUser)];
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
