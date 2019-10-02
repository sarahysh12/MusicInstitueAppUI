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
    if (this.username === 'admin' && this.password === 'admin') {
      // Mock user
      const mockUser = new User();
      mockUser.username = this.username;
      this.user.setUser(mockUser);

      this.router.navigate(['/home']);
    } else {
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
