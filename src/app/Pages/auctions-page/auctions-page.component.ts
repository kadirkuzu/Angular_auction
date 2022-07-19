import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auctions} from "./auctions";
import {AuctionsService} from "../../../Services/auctionsService/auctions.service";
import {Router} from "@angular/router";
import {io} from 'socket.io-client'
import {data} from "jquery";
import {text} from "express";
import Swal from "sweetalert2";

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.css']
})
export class AuctionsPageComponent implements OnInit {
  constructor(private http: HttpClient, public auctionsService: AuctionsService, private router: Router) {
  }

  socket = io("http://localhost:2000")


  ngOnInit(): void {
    this.socket.on("changePrice",data=>this.changePrice(data.id,data.price))
  }
async changePrice(id:number,price:number){
  let elementId="auctionPrice"+id
  let priceAdress=document.getElementById(elementId)
  if (priceAdress) priceAdress.innerHTML=String('₺'+price+".00")
  }


}

