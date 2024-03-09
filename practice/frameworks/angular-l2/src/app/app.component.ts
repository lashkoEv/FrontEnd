import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = [
    {
      login: 'user1',
      password: 'pass',
    },

    {
      login: 'user2',
      password: 'pass',
    },

    {
      login: 'user3',
      password: 'pass',
    },
  ];

  public isVisibleMain = false;

  public changeVisibilityMain() {
    this.isVisibleMain = !this.isVisibleMain;
  }

  public isVisibleForm = false;

  public changeVisibilityForm() {
    this.isVisibleForm = !this.isVisibleForm;
  }

  public signInEvent() {
    this.isVisibleForm = !this.isVisibleForm;
    console.log(this.isVisibleForm);
  }

  public addValueEvent(data) {
    this.users.push(data);
  }

  public sendEvent() {
    this.isVisibleMain = !this.isVisibleMain;
  }
}
