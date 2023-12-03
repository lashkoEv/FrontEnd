import { UserType } from "../enums";

export interface IUser {
  getLogin(): string;
  getPassword(): string;
  getUserType(): UserType;
}
