import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auctions} from "./auctions";
import {AuctionsService} from "../../../Services/auctionsService/auctions.service";
import {Router} from "@angular/router";
import {io} from 'socket.io-client'
import {data} from "jquery";
import {text} from "express";

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.css']
})
export class AuctionsPageComponent implements OnInit {
  constructor(private http: HttpClient, public auctionsService: AuctionsService, private router: Router) {
  }

  socket = io("http://localhost:2000")


 async startSocket(){
   await this.socket.emit("try","")
  }
  changePrice(price:number){
   let baslik= document.getElementById("baslikdeneme")
    if(baslik){
    baslik.innerHTML="DEĞİŞTİRME TAMAMLANDI"}
  }

  ngOnInit(): void {
    this.socket.on("changePrice",price=>this.changePrice(price))
  }

}

