import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public errMessage: string = '';

  constructor(public authService: AuthService) {}

  public formHandler(form) {
    this.authService.validateAuth(form.value).subscribe((r) => {
      if (r['errMsg']) {
        this.errMessage = r['errMsg'];
        return;
      }

      localStorage.setItem('user', JSON.stringify(r));
      console.log(localStorage.getItem('user'));
      this.errMessage = '';
      location.reload();
    });
  }
}
