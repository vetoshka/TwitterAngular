import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from 'src/app/tweet/tweet.component';
import { NewTweetComponent } from 'src/app/new-tweet/new-tweet.component';
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [TweetComponent ,NewTweetComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[TweetComponent,NewTweetComponent]
})
export class TweetModule { }
