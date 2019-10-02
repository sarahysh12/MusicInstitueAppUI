import { Provider } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { ConfigService } from '../services/config.service';


export const SERVICES: Provider[] = [
    UserService,
    AuthenticationService,
    User,
    ConfigService
];
