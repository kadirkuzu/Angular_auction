import { Component } from '@angular/core';
import {AuctionsService} from "../Services/auctionsService/auctions.service";
import {AccountService} from "../Services/accountService/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading=true
  title = 'auction';
  kadir="kadirkuzu"
  constructor(private auctionsService:AuctionsService,public accountService:AccountService) {
  }
  ngOnInit(): void {
    this.auctionsService.getAuctions().finally(()=>{this.loading=false})
  }
  girisVarmi(){
    return !!localStorage.getItem("isLogged");
  }
}
