import { Status } from '../enums/Status';

export interface ITask {
  getId: () => number;
  getDescription: () => string;
  getDate: () => Date;
  getStatus: () => Status;
}
