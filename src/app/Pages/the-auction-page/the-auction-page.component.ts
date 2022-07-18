import {Component, OnInit} from '@angular/core';
import {AuctionsService} from "../../../Services/auctionsService/auctions.service";
import {TheOffersMade} from "./TheAuction";
import {AccountService} from "../../../Services/accountService/account.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../login/User";
import {io} from "socket.io-client";
import Swal from "sweetalert2";

@Component({
  selector: 'app-the-auction-page',
  templateUrl: './the-auction-page.component.html',
  styleUrls: ['./the-auction-page.component.css']
})
export class TheAuctionPageComponent implements OnInit {
  socket = io("http://localhost:2000")
  constructor(public auctionService: AuctionsService, public accountService: AccountService, public http: HttpClient) {
  }

  ngOnInit(): void {
    this.findUser()
    this.socket.on("addOfferss",data=>{
      this.addOfferToAll(data.price,data.userName)
    })
  }

  theOffersMade: TheOffersMade[] = [{price: 100, customerUserName: "kadir"}]
  customer: User = {userName: "kadir", name: "kadir", secondName: "kuzu", id: 1, emailAdress: "", password: 1234}

  async findUserValue() {
    let id = localStorage.getItem("isLogged")
    if (id==null) return
    let url = 'http://localhost:3000/users/' + id
    let user = await this.http.get(url).toPromise()
    return user
  }

  findUser() {
    this.findUserValue().then(value => {
      if (value) this.customer = value as User
    })
  }

  addOffer() {
    let price = <HTMLInputElement>document.getElementById("offerInput")
    if (!price) {console.log("hata");return}
    const priceValue = Number(price.value)||null
    if (priceValue==null){Swal.fire({icon: 'error', title: 'Error', text: 'Please write number'});return}
    price.value=""
    let customerUserName=this.customer.userName
    this.socket.emit("addOffers",{price:priceValue,userName:customerUserName})
  }
  addOfferToAll(price:number,username:string){
    this.theOffersMade.unshift({price: price, customerUserName: username});
    console.log(username)
  }



}
