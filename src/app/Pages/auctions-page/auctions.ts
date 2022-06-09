export class Auctions {
  name: string;
  price: number;
  type: string;
  imgUrl: string;
  product:string;

  constructor(name: string, price: number, type: string, imgUrl: string,product:string) {
    this.name = name
    this.price = price
    this.type = type
    this.imgUrl=imgUrl
    this.product=product
  }
}
