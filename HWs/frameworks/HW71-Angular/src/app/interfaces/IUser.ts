import { Role } from '../enums/Role';

export interface IUser {
  getLogin(): string;
  getPassword(): string;
  getRole(): Role;
}
