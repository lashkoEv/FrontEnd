import { IMessage, IUser } from '../interfaces';

export class Message implements IMessage {
  constructor(
    private from: IUser,
    private to: IUser,
    private date: Date,
    private text: string
  ) {}

  getFrom = () => {
    return this.from;
  };

  getTo = () => {
    return this.to;
  };

  getDate = () => {
    return this.date;
  };

  getText = () => {
    return this.text;
  };
}
