import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  public errMessage:string = "";

  constructor(
    public authService:AuthService
  ){}

  public formHandler(form) {
    this.authService.validateAuth(form.value).subscribe(r => {
      const result = Object.keys(r);
      result.forEach(err => {
        if(err === "errMsg") {
          this.errMessage = r[err];
        }
      })

    })
  }
}
