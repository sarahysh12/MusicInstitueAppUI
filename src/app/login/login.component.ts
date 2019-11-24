import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  username: string;
  password: string;
  isLogin = true;
  isError = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public auth: AuthenticationService,
    public user: User
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.error = false;

    // Mock Login
    if (this.username === 'Sara.Yarshenas' && this.password === 'pass') {
      // Mock user
      const mockUser = new User();
      mockUser.username = this.username;
      mockUser.isLoggedIn = true; //TODO more checks on token & etc
      this.user.setUser(mockUser);

      this.router.navigate(['/home']);
    } else {
      this.isError = true;
      console.log('Error!');
    }

    this.auth.login(this.username, this.password)
    .subscribe((user: User) => {
      this.user.setUser(user);
      this.error = false;
      this.router.navigate(['/home']);
    }, (error) => {
      this.error = true;
    });

    }

}
