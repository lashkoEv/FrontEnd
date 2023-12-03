import { User, UserRepository } from "..";
import { UserType } from "../../enums";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.init();
  }

  init() {
    this.userRepository.add(new User("admin", "admin", UserType.Admin));
    this.userRepository.add(new User("guest", "guest", UserType.Guest));
  }

  authorize(login: string, password: string) {
    return this.userRepository.getByLoginAndPassword(login, password);
  }
}
