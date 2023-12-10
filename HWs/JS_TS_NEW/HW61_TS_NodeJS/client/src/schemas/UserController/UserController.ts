import { User, UserRepository } from "..";
import { UserType } from "../../enums";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.userRepository.add(new User("userId", "user", "user", UserType.Guest));
  }

  authorize(login: string, password: string) {
    return this.userRepository.getByLoginAndPassword(login, password)
      ? true
      : false;
  }
}
