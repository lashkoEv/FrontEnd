export interface IUser {
  getLogin: () => string;
  getPassword: () => string;
  getFriends: () => IUser[];

  setLogin: (login: string) => void;
  setPassword: (password: string) => void;

  addFriend: (friend: IUser) => void;
}
