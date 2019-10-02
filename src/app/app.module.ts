import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { SERVICES } from './imports/services';
import { HomeComponent } from 'src/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutes } from './main.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
