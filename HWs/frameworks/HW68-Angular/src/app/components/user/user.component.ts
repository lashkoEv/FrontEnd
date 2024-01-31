import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { IUser } from '../../interfaces';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements AfterViewInit {
  @Input() private user: IUser;
  @ViewChild('icon') iconElement: ElementRef;

  constructor(
    private renderer: Renderer2,
    private userService: UserService,
    private chatService: ChatService
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.iconElement.nativeElement,
      'background-color',
      this.getRandomColor()
    );
  }

  getLogin() {
    return this.user.getLogin();
  }

  getRandomColor() {
    return `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 254);
  }

  addToFriends() {
    this.userService.getCurrentUser().addFriend(this.user);
  }

  openChat() {
    this.chatService.loadChat(this.userService.getCurrentUser(), this.user);
    this.chatService.changeVisibility();
  }
}
