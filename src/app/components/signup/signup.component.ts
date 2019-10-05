import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  error = false;
  fullname: string;
  username: string;
  email: string;
  password: string;
  repassword: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService,
    public user: User
  ) {}

  onSignUp() {
    const firstName = this.fullname.split(' ')[0];
    const lastName = this.fullname.split(' ')[1];
    console.log(firstName, lastName, this.username, this.email);
    this.userService.createNewUser(firstName, lastName, this.username, this.email)
    .subscribe((user: User) => {
      this.user.setUser(user);
      this.error = false;
      this.router.navigate(['/login']);
    }, (error) => {
      this.error = true;
    });
  }

}
