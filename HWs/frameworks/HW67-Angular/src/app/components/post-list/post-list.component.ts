import { Component } from '@angular/core';
import { IPost } from '../../interfaces';
import { PostService } from '../../services/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  constructor(private postService: PostService) {}

  getPosts(): IPost[] {
    return this.postService.getAll();
  }
}
