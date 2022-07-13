import {Component, OnInit} from '@angular/core';
import {Auctions} from "../Pages/auctions-page/auctions";
import {HttpClient} from "@angular/common/http";
import {Categories, Product} from "./Categories";
import {AuctionsService} from "../../Services/auctionsService/auctions.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [{name:"deneme",typeOfCategory:"deneme"}]
  deneme(){
    console.log("deneme")}
  categories: Categories[] = []

  constructor(private http: HttpClient, public  auctionsService: AuctionsService) {
  }

  async findProductList(categoryname: string):Promise<void> {
    let i: number
    let result: Product[] = []
    let list = await this.http.get("http://localhost:3000/products").toPromise();
    result = list as Product[]
    let result1=[]
    for (i = 0; i < result.length; i+=1) {
      if (result[i].typeOfCategory == categoryname) {
        result1.push(result[i])
      }
    }
    this.products = result1
  }
  async ngOnInit(): Promise<void> {
    const res = await this.http.get("http://localhost:3000/categories").toPromise();
    this.categories = res as Categories[]
  }
}
