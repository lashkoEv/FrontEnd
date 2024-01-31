import { Injectable } from '@angular/core';
import { IMessage, IUser } from '../interfaces';
import { Message } from '../schemas';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private isVisible = false;
  private messages: IMessage[] = [];
  private currentUser: IUser | null = null;
  private chatWith: IUser | null = null;

  constructor(private userService: UserService) {}

  getVisibility() {
    return this.isVisible;
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  loadChat(currentUser: IUser, chatWith: IUser) {
    this.currentUser = currentUser;
    this.chatWith = chatWith;

    this.load();
  }

  load() {
    this.messages = [];

    const messages = JSON.parse(localStorage.getItem('messages'));

    for (const data of messages) {
      const condition =
        (this.currentUser.getLogin() === data.from.login &&
          this.chatWith.getLogin() === data.to.login) ||
        (this.currentUser.getLogin() === data.to.login &&
          this.chatWith.getLogin() === data.from.login);

      if (condition) {
        this.messages.push(
          new Message(
            this.userService.getByLoginAndPassword(
              data.from.login,
              data.from.password
            ),
            this.userService.getByLoginAndPassword(
              data.to.login,
              data.to.password
            ),
            new Date(data.date),
            data.text
          )
        );
      }
    }
  }

  getAll() {
    return [...this.messages];
  }

  add(text: string) {
    this.messages.push(
      new Message(this.currentUser, this.chatWith, new Date(), text)
    );

    localStorage.setItem('messages', JSON.stringify(this.messages));
  }
}
