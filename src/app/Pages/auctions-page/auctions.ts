import {TheOffersMade} from "../the-auction-page/TheAuction";

export class Auctions {
  id:number;
  name: string;
  price: number;
  type: string;
  imgFirst: string;
  allImages:any[];
  product:string;
  buyNowPrice:number;
  offers:TheOffersMade[];
  startTime:any
  finishTime:any

  constructor(name: string, price: number, type: string, imgFirst: string,product:string,id:number,buyNowPrice:number,allImages:any[],offers:TheOffersMade[],startTime:any,finishTime:any) {
    this.name = name
    this.price = price
    this.type = type
    this.imgFirst=imgFirst
    this.product=product
    this.id=id
    this.buyNowPrice=buyNowPrice
    this.allImages=allImages
    this.offers=offers
    this.startTime=startTime
    this.finishTime=finishTime
  }
}
