import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {AddAdComponent} from "./Pages/add-ad/add-ad.component";
import {AuctionsPageComponent} from "./Pages/auctions-page/auctions-page.component";
import {LoginComponent} from "./Pages/login/login.component";
import {LogOutComponent} from "./Pages/log-out/log-out.component";
import {SignUpComponent} from "./Pages/sign-up/sign-up.component";
import {TheAuctionPageComponent} from "./Pages/the-auction-page/the-auction-page.component";

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'add-ad',component:AddAdComponent},
  {path:'auctions',component:AuctionsPageComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogOutComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'auctions/:auction',component:TheAuctionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
