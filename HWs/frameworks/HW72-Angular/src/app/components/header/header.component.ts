import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { IRouterLink } from '../../interfaces/IRouterLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private navigationService: NavigationService) {}

  getRouterLinks() {
    return this.navigationService.getRouterLinks();
  }
}
