import { Injectable } from '@angular/core';

import { IRouterLink } from '../interfaces/RouterLink';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  getRouterLinks(): IRouterLink[] {
    return [
      {
        label: 'Quizzes',
        href: '/quizzes',
        info: 'Here there are quizzes where you can check your knowledges according to your specialization.',
        disabled: false,
      },
      {
        label: 'Resources',
        href: '/resources',
        info: 'Here there are links where you can find useful resources which will fit to ur specialization.',
        disabled: false,
      },
      {
        label: 'Profile',
        href: '/profile',
        info: "It's ur personal page where you can see ur achivments and add there information about yourself.",
        disabled: this.getProfileMode(),
      },
    ];
  }

  getProfileMode() {
    return localStorage.getItem('user') ? false : true;
  }

  getLabel() {
    return localStorage.getItem('user') ? 'Logout' : 'Login';
  }

  getAuthLink() {
    return {
      label: this.getLabel(),
      href: '/auth',
    };
  }
}
