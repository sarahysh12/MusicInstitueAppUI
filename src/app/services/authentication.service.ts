
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable()
export class AuthenticationService {
  private baseUrl: string;

  constructor(
    public httpClient: HttpClient,
    public user: User,
    public config: ConfigService
    ) {
    this.baseUrl = this.config.getServiceValue('AuthenticationService', 'AuthenticationApi');
}

  login(username: string, password: string): Observable<User> {
    const authUrl = this.baseUrl;
    const body = { username, password };
    return this.httpClient.post<User>(authUrl, body);
}

}
