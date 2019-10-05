import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const MainRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    }
];
