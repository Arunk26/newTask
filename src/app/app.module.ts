import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from "../app/materialModule"

import { UserComponent } from './user/user.component';
import {UserServiceService} from "./user-service.service";

import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { UserIdComponent } from './user-id/user-id.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ButtonComponent,
    UserIdComponent 
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
