
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuModule } from './Modules/nav-menu/nav-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './Components/authentication/register/register.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthenticationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4200"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [HttpClient, JwtHelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
