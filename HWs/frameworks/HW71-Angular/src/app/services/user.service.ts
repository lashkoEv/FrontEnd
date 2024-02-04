import { Role } from './../enums/Role';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { User } from '../schemas/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[];
  private currentUser: IUser | undefined;

  constructor() {
    this.users = [];
    this.init();
    this.currentUser = undefined;
  }

  init() {
    this.add('adm', 'pass', Role.Admin);
  }

  add(login: string, password: string, role: Role) {
    this.users.push(new User(login, password, role));
  }

  authorize(login: string, password: string) {
    this.currentUser = this.users.find(
      (user) => user.getLogin() === login && user.getPassword() === password
    );

    return this.currentUser;
  }

  isAuthorized() {
    return this.currentUser ? true : false;
  }

  getAll() {
    return [...this.users];
  }
}
