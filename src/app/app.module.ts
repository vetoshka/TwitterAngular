
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuModule } from './Modules/nav-menu/nav-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './Modules/authentication/authentication.module';

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
    AuthenticationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
