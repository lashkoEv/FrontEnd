import { UserType } from "../enums";
import { User } from "../schemas";

export const getUsers = () => {
  return [
    new User("user0", "a", "a", UserType.Admin),
    new User("user1", "g", "g", UserType.Guest),
  ];
};
