export class User {
    firstName: string;
    lastName: string;
    studentId: string;
    username: string;
    isLoggedIn: boolean;
    email: string;
    adderss: string;


  setUser(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.studentId = user.studentId;
    this.username = user.username;
    this.isLoggedIn = user.isLoggedIn;
    this.email = user.email;
    this.adderss = user.adderss;
  }

}
