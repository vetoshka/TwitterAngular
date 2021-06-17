
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { NavMenuModule } from './Modules/nav-menu/nav-menu.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
