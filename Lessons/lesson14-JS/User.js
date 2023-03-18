// Online-shop
// 1) User (name , login , password, wallet , briefcase) => buy
// 1.1) Sign up
// 1.2) Sign in
// 1.3) Reset password
// 1.3) Buy product -

class User {
    constructor(name, login, password, wallet, briefcase) {
      this.name = name;
      this.login = login;
      this.password = password;
      this.wallet = wallet;
      this.briefcase = briefcase;
    }
  
    signUp() {
      console.log(`Signed in ${this.name}`);
    }
  
    signIn(login, password) {
      if (this.login === login && this.password === password) {
        console.log(`Signed up ${this.name}`);
      } else {
        console.log("Error");
      }
    }
  
    resetPassword(oldPass, newPass) {
      if (this.password === oldPass) {
      // {
      //   validate new pass
      // }
  
        this.password = newPass;
      }
    }
  }
  
  export default Under;