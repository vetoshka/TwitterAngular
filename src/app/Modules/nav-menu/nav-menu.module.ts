import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from 'src/app/navigation-bar/navigation-bar.component';
import { NavMenuRountingModule } from './nav-menu-rounting.module';



@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    NavMenuRountingModule
  ],
  exports:[NavigationBarComponent]
})
export class NavMenuModule { }
