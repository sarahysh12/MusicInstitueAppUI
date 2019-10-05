import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {
  private baseUrl: string;

  constructor(
    public httpClient: HttpClient,
    public user: User,
    public config: ConfigService
    ) {
      this.baseUrl = this.config.getServiceValue('UserService', 'NewUserApi');
    }

    createNewUser(firstname: string, lastname: string, username: string, email: string): Observable<User> {
      const postUserUrl = this.baseUrl;
      const body = { firstname, lastname, username, email };
      return this.httpClient.post<User>(postUserUrl, body);
  }

}
