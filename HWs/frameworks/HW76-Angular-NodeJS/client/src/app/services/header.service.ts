import { Injectable } from '@angular/core';

import { IRouterLink } from '../interfaces/RouterLink';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public authLink = {
    label:"Login", //
    href:"/auth",
  }

  private routerLinks: IRouterLink[] = [
    {
      label:"Quizzes",
      href:  "/quizzes",
      info: "Here there are quizzes where you can check your knowledges according to your specialization."
    },
    {
      label:"Resources",
      href:"/resources",
      info: "Here there are links where you can find useful resources which will fit to ur specialization."
    },
    {
      label:"Profile",
      href:"/profile",
      info: "It's ur personal page where you can see ur achivments and add there information about yourself."
    },
  ]
  constructor() { }


  public getRouterLinks(): IRouterLink[] {
    return this.routerLinks;
  }


}
