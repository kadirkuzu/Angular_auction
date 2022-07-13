export class Auctions {
  id:number;
  name: string;
  price: number;
  type: string;
  imgUrl: string;
  product:string;
  buyNow:number;

  constructor(name: string, price: number, type: string, imgUrl: string,product:string,id:number,buyNow:number) {
    this.name = name
    this.price = price
    this.type = type
    this.imgUrl=imgUrl
    this.product=product
    this.id=id
    this.buyNow=buyNow
  }
}
