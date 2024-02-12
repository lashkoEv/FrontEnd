import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private messages: any;

  constructor(public httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3000').subscribe((data) => {
      this.messages = data;
    });
  }

  getMessages() {
    return this.messages;
  }
}
