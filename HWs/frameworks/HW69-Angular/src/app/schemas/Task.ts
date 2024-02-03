import { Status } from '../enums/Status';
import { ITask } from '../interfaces/ITask';

export class Task implements ITask {
  constructor(
    private id: number,
    private description: string,
    private date: Date,
    private status: Status
  ) {}

  getId = (): number => {
    return this.id;
  };

  getDescription = (): string => {
    return this.description;
  };

  getDate = (): Date => {
    return this.date;
  };

  getStatus = (): Status => {
    return this.status;
  };
}
