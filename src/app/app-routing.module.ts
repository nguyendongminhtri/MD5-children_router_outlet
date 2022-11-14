import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./form-login/register/register.component";
import {HomeComponent} from "./home/home/home.component";
import {ProfileComponent} from "./profile/profile/profile.component";
import {VideoComponent} from "./profile/video/video.component";
import {FriendsComponent} from "./profile/friends/friends.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: "", component: HomeComponent},
  {path: 'profile', component: ProfileComponent,
  children: [
    {path: 'video', component: VideoComponent},
    {path: 'friends', component: FriendsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
