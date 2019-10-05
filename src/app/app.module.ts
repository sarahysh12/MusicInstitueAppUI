import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { SERVICES } from './imports/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutes } from './main.routing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
