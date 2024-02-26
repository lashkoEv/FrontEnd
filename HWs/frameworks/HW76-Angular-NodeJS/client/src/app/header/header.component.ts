import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../services/header.service';

import { IRouterLink } from '../interfaces/RouterLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public routerLinks: IRouterLink[] = [];
  public panelOpenState: boolean = true;
  public isVisibleExpansionPanel: boolean = false;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {
    this.routerLinks = this.headerService.getRouterLinks();
  }

  public setVisibility() {
    this.isVisibleExpansionPanel = !this.isVisibleExpansionPanel;
  }

  getAuth() {
    return this.headerService.getAuthLink();
  }

  logout() {
    localStorage.removeItem('user');
    location.reload();
  }

  getRouterLinks() {
    return this.routerLinks;
  }
}
