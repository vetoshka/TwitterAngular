import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { TweetModule } from '../tweet/tweet.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    TweetModule,
    HttpClientModule 
  ],
  providers:[HttpClient],
  exports:[HomeComponent],
})
export class HomeModule { 
}
