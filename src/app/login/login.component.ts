import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  username: string;
  password: string;
  isLoading: boolean;
  returnUrl: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute
    //public user: User
    //public userService: UserService
  ) { }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // if (this.user.isLoggedIn) {
    //   this.router.navigate(['']);
    // }
  }

  onLogin() {
    this.error = false;
    this.isLoading = true;

  }

  getUser() {

  }

  onLoginComplete() { }


}
