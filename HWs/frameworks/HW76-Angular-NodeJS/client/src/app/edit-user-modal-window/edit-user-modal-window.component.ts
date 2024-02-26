import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-edit-user-modal-window',
  templateUrl: './edit-user-modal-window.component.html',
  styleUrl: './edit-user-modal-window.component.scss',
})
export class EditUserModalWindowComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {}

  edit(data: any) {
    const isNotEmptyFields =
      data.name.trim().length > 0 &&
      data.email.trim().length > 0 &&
      data.password.trim().length > 0 &&
      data.age;

    if (isNotEmptyFields) {
      this.profileService.edit(data);

      this.profileService.changeVisibility();
    }
  }

  getVisibility() {
    return this.profileService.getVisibility();
  }

  getUser() {
    return this.profileService.getUser();
  }
}
