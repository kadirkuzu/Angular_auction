import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuctionsService} from "../../../Services/auctionsService/auctions.service";
import {Product} from "../../categories/Categories";
import {Auctions} from "../auctions-page/auctions";
import {io} from "socket.io-client";

@Component({
  selector: 'app-add-auctions',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})


export class AddAdComponent implements OnInit {
  socket = io("http://localhost:2000")
  form = new FormGroup({
    id: new FormControl(this.auctionService.createId(), [Validators.required]),
    name:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    firstPrice:new FormControl("",[Validators.required]),
    buyNowPrice:new FormControl("",[Validators.required]),
    type:new FormControl("Select type of product",[Validators.required]),
    product:new FormControl("Select product type of auction",[Validators.required]),
    imgFirst:new FormControl("",[Validators.required]),
    allImages:new FormControl("",[Validators.required]),
    startTime:new FormControl("",[Validators.required]),
    finishTime:new FormControl("",[Validators.required]),
    startDay:new FormControl("",[Validators.required]),
    finishDay:new FormControl("",[Validators.required]),
  })
  constructor(public auctionService:AuctionsService) {  }
  products:Product[]=[]
  ngOnInit(): void {

  }
  async findProducts(){
   let type = <HTMLInputElement>document.getElementById("type")
    if (type.value=="Select type of product") return
    let productFonk = await this.auctionService.findProductsOfType(type.value)
    if (productFonk) this.products=productFonk as Product[]
  }

  async addProduct(){
  const newAuction=this.form.value
  newAuction.firstPrice= +newAuction.firstPrice
    newAuction.price=newAuction.firstPrice
    await this.auctionService.addProduct(newAuction)
    this.form.reset({id: this.auctionService.createId(),type:"Select type of product",product:"Select product type of auction"})
    this.socket.emit("addNewAuctionMessage",newAuction)
  }

}
