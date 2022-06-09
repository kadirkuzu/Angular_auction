import { Component } from '@angular/core';
import {AuctionsService} from "../Services/auctionsService/auctions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading=true
  title = 'auction';
  kadir="kadirkuzu"
  constructor(private auctionsService:AuctionsService) {
  }
  ngOnInit(): void {
    this.auctionsService.getAuctions().finally(()=>{this.loading=false})
  }
}
