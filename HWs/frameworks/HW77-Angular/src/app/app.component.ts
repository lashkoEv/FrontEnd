import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './services/spinner.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private posts: any[];
  private comments: any[];
  private albums: any[];
  private photos: any[];
  private todos: any[];
  private users: any[];

  constructor(
    private spinnerService: SpinnerService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.spinnerService.changeVisibility();

    setTimeout(() => {
      this.dataService.getAllData().subscribe((data: any[]) => {
        [
          this.posts,
          this.comments,
          this.albums,
          this.photos,
          this.todos,
          this.users,
        ] = data;

        console.log(this.posts);
      });

      this.spinnerService.changeVisibility();
    }, 2000);
  }

  getPosts() {
    return this.posts;
  }

  getComments() {
    return this.comments;
  }

  getAlbums() {
    return this.albums;
  }

  getPhotos() {
    return this.photos;
  }

  getTodos() {
    return this.todos;
  }

  getUsers() {
    return this.users;
  }

  getVisibility() {
    return this.spinnerService.getVisibility();
  }

  onTabChanged() {
    this.spinnerService.changeVisibility();

    setTimeout(() => {
      this.spinnerService.changeVisibility();
    }, 2000);
  }
}
