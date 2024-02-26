import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../services/header.service';

import { IRouterLink } from '../interfaces/RouterLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public routerLinks:IRouterLink[] = [];
  public panelOpenState:boolean = true;
  public isVisibleExpansionPanel:boolean = false;
  public auth = this.headerService.authLink;

  constructor(
    public headerService:HeaderService
  ) {
  }

  public setVisibility() {
    this.isVisibleExpansionPanel = !this.isVisibleExpansionPanel;
  }

  ngOnInit(): void {
    this.routerLinks = this.headerService.getRouterLinks();
  }
}
