import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TheAuctionPageComponent } from './Pages/the-auction-page/the-auction-page.component';
import { AuctionsPageComponent } from './Pages/auctions-page/auctions-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { LogOutComponent } from './Pages/log-out/log-out.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddAdComponent } from './Pages/add-ad/add-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TheAuctionPageComponent,
    AuctionsPageComponent,
    LoginComponent,
    LogOutComponent,
    SignUpComponent,
    CategoriesComponent,
    AddAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
