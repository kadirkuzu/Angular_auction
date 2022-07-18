import { Component } from '@angular/core';
import {AuctionsService} from "../Services/auctionsService/auctions.service";
import {AccountService} from "../Services/accountService/account.service";
import {io} from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading=true
  title = 'auction';
  constructor(private auctionsService:AuctionsService,public accountService:AccountService) {
  }
  ngOnInit(): void {
    this.auctionsService.getAuctions().finally(()=>{this.loading=false})
    if (localStorage.getItem("isLogged")) this.accountService.loggedIn=true
  }
  girisVarmi(){
    return !!localStorage.getItem("isLogged");
  }
}
