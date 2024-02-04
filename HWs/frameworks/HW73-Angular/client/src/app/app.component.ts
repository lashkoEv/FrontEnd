import { Component } from '@angular/core';
import { QuizzesService } from './quizzes.service';
import { ResourceService } from './resources.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Application';

  public routerLinks = [
    {
      label:"Quizzes",
      href:  "/quizzes"
    },
    {
      label:"Resources",
      href:"/resources"
    }
  ]

  constructor() {}
}
