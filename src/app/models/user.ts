export class User {
    firstName: string;
    lastName: string;
    studentId: string;
    username: string;
    isLoggedIn: boolean;
    email: string;
    adderss: string;
    phone: string;


  setUser(user: User) {
    this.firstName = user.username.split('.')[0];
    this.lastName = user.username.split('.')[1];
    this.studentId = user.studentId;
    this.username = user.username;
    this.isLoggedIn = user.isLoggedIn;
    this.email = user.email;
    this.adderss = user.adderss;
    this.phone = user.phone;
  }
  // TODO: increment student id automatically


}
