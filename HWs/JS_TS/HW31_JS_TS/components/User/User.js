export class User {
    #fullName;
    #login;
    #password;
    
    constructor(fullName, login, password) {
        this.#fullName = fullName;
        this.#login = login;
        this.#password = password;
    }

    get fullName() {
        return this.#fullName;
    }

    set fullName(fullName) {
        this.#fullName = fullName;
    }

    get login() {
        return this.#login;
    }

    set login(login) {
        this.#login = login;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }
}