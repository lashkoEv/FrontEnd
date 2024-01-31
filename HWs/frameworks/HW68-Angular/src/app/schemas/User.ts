import { IUser } from '../interfaces';

export class User implements IUser {
  private friends: IUser[] = [];

  constructor(private login: string, private password: string) {}

  getLogin = () => {
    return this.login;
  };

  getPassword = () => {
    return this.password;
  };

  getFriends = () => {
    return [...this.friends];
  };

  setLogin = (login: string) => {
    this.login = login;
  };

  setPassword = (password: string) => {
    this.password = password;
  };

  addFriend = (friend: IUser) => {
    this.friends.push(friend);
  };
}
