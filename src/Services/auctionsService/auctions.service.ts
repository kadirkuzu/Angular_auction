import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auctions} from "../../app/Pages/auctions-page/auctions";
import {Product} from "../../app/categories/Categories";

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {
  private baseAuctions: Auctions[] = []
  auctions: Auctions[] = []
  activeCategory = "all auctions"
  constructor(private http: HttpClient) {
  }

  async getAuctions() {
    const res = await this.http.get("http://localhost:3000/auctions").toPromise();
    if (!res) return
    this.baseAuctions = res as Auctions[]
    this.auctions=this.baseAuctions.sort( (a:Auctions,b:Auctions) => (b.price-a.price))

  }

  categoryFilter(categoryname: string) {
    if (categoryname.toLowerCase() == "all auctions") {
      this.auctions = this.baseAuctions;
      return
    }
    this.auctions = this.baseAuctions.filter((auction: Auctions) => auction.type.toLowerCase() === categoryname.toLowerCase())

  }

  findAuctionsWhichCategories(categoryname: string): number {
    let i: number;
    let result: number = 0;
    if (categoryname == "all auctions") {
      result = this.baseAuctions.length
    } else {
      for (i = 0; i < this.baseAuctions.length; i += 1) {
        if (this.baseAuctions[i].type == categoryname) {
          result += 1
        }
      }
    }
    return result
  }
  increasingByPrice(){
    this.baseAuctions=this.baseAuctions.sort( (a:Auctions,b:Auctions) => (a.price-b.price))
  }
  decreasingByPrice(){
    this.baseAuctions=this.baseAuctions.sort( (a:Auctions,b:Auctions) => (b.price-a.price))
  }
  increasingByName(){
    this.baseAuctions=this.baseAuctions.sort((a:Auctions,b:Auctions)=>((a.name).localeCompare(b.name)))
  }
  decreasingByName(){
    this.baseAuctions=this.baseAuctions.reverse()
  }
  createId(){
  let newId=0
  for (let auctions of this.auctions){if (auctions.id>newId) newId=auctions.id}
  return newId+1
  }

  async findProductsOfType(value:any){
   let result=[]
   let products:Product[] ;
   const productsAdres=await this.http.get("http://localhost:3000/products").toPromise()
    if (!productsAdres)return
    products = productsAdres as Product[]
    for(let product of products){
      if (product.typeOfCategory.toLowerCase()==value.toLowerCase()){
        result.push(product)
      }
    }
  return result
  }

}
