import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTweetRoutingModule } from './new-tweet-routing.module';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [NewTweetComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NewTweetRoutingModule
    
  ],
  exports:[NewTweetComponent]
})
export class NewTweetModule { }
