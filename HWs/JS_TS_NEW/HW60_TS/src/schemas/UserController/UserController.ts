import { User, UserRepository } from "..";
import { UserType } from "../../enums";
import { getUsers } from "../../utils";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.init();
  }

  init() {
    this.userRepository.save(getUsers());
    this.userRepository.load();
  }

  authorize(login: string, password: string) {
    return this.userRepository.getByLoginAndPassword(login, password);
  }
}
