import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { NavBarComponent } from './nav-foot/nav-bar/nav-bar.component';
import { FooterComponent } from './nav-foot/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './form-login/register/register.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { VideoComponent } from './profile/video/video.component';
import { FriendsComponent } from './profile/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    VideoComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
