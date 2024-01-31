import { IUser } from './IUser';

export interface IMessage {
  getFrom: () => IUser;
  getTo: () => IUser;
  getDate: () => Date;
  getText: () => string;
}
