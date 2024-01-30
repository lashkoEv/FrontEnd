import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  private path = '/assets/images/logo.svg';
  private title = 'Blog';

  public getPath() {
    return this.path;
  }

  public getTitle() {
    return this.title;
  }
}
