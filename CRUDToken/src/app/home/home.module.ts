import { AppComponent } from './../app.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    NormalUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeRouting
  ],
  providers: [],

})
export class HomeModule { }
