import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

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
