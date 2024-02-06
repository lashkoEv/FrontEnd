import { Injectable } from '@angular/core';
import { IRouterLink } from '../interfaces/IRouterLink';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private routerLinks: IRouterLink[] = [
    {
      label: 'People',
      href: '/people',
    },
    {
      label: 'Planets',
      href: '/planets',
    },
    {
      label: 'Films',
      href: '/films',
    },
    {
      label: 'Species',
      href: '/species',
    },
    {
      label: 'Vehicles',
      href: '/vehicles',
    },
    {
      label: 'Starships',
      href: '/starships',
    },
  ];
  constructor() {}

  public getRouterLinks(): IRouterLink[] {
    return [...this.routerLinks];
  }
}
