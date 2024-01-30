import { IPost } from '../../interfaces';

export class Post implements IPost {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  getTitle = (): string => {
    return this.title;
  };

  setTitle = (title: string): void => {
    this.title = title;
  };
}
