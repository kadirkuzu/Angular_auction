import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {AddAdComponent} from "./Pages/add-auctions/add-ad.component";
import {AuctionsPageComponent} from "./Pages/auctions-page/auctions-page.component";
import {LoginComponent} from "./Pages/login/login.component";
import {SignUpComponent} from "./Pages/sign-up/sign-up.component";
import {TheAuctionPageComponent} from "./Pages/the-auction-page/the-auction-page.component";
import {UserPageComponent} from "./Pages/user-page/user-page.component";
import {LoginGuard} from "./Pages/login/login.guard";

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'add-auctions',component:AddAdComponent,canActivate:[LoginGuard]},
  {path:'auctions',component:AuctionsPageComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'auctions/:auction',component:TheAuctionPageComponent},
  {path:'userpage',component:UserPageComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
