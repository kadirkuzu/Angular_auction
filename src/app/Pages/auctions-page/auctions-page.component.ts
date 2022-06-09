import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auctions} from "./auctions";
import {AuctionsService} from "../../../Services/auctionsService/auctions.service";

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.css']
})
export class AuctionsPageComponent implements OnInit {
  constructor(private http: HttpClient,public auctionsService:AuctionsService) {
  }
  ngOnInit(): void {

  }
}


