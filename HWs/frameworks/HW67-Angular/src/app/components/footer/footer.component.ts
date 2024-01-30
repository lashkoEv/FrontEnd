import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private title = 'All rights reserved © 2024';

  public getTitle() {
    return this.title;
  }
}
