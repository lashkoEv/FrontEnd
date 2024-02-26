import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private isVisibleSpinner: boolean;

  constructor(private profileService: ProfileService) {
    this.profileService.loadUser();
  }

  ngOnInit(): void {
    this.isVisibleSpinner = true;

    setTimeout(() => {
      this.isVisibleSpinner = false;
    }, 3000);
  }

  getUser() {
    return this.profileService.getUser();
  }

  getImageUrl() {
    return this.profileService.getImageUrl();
  }

  getVisibility() {
    return this.isVisibleSpinner;
  }

  showModal() {
    this.profileService.changeVisibility();
  }
}
