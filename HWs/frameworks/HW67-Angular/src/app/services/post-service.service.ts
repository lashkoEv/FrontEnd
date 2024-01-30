import { Post } from '../components/shemas';
import { IPost } from './../interfaces/IPost';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: IPost[];

  constructor() {
    this.posts = [];

    this.init();
  }

  private init() {
    this.add('First post!');
    this.add('Second post!');
    this.add('Third post!');
  }

  public add(title: string) {
    this.posts.push(new Post(title));
  }

  public getAll() {
    return [...this.posts];
  }
}
