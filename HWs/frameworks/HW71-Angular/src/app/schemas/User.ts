import { Role } from '../enums/Role';
import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  constructor(
    private login: string,
    private password: string,
    private role: Role
  ) {}

  getRole(): Role {
    return this.role;
  }

  getLogin(): string {
    return this.login;
  }

  getPassword(): string {
    return this.password;
  }
}
