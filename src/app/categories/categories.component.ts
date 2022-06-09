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
  products: Product[] = []
  activeCategory = "electronic"
  categories: Categories[] = []

  constructor(private http: HttpClient, private auctions: AuctionsService) {
  }

  findAuctionsWhichCategories(categoryname: string): number {
    let i: number;
    let result: number = 0;
    for (i = 0; i < this.auctions.auctions.length; i += 1) {
      if (this.auctions.auctions[i].type == categoryname) {
        result += 1
      }
    }

    return result
  }

  async findProductList(categoryname: string): Promise<Product[]> {
    let i: number
    let result: Product[] = []
    let list = await this.http.get("http://localhost:3000/products").toPromise();
    result = list as Product[]
    for (i = 0; i < result.length; i++) {
      if (result[i].typeOfCategory == categoryname) {
        result.push(result[i])
      }
    }
    if (!result) return []
    return result
  }

  // @ts-ignore
  productList(categoryName: string):Product[]{
    this.findProductList(categoryName).then(value => {
      let result: Product[];
      result = value
      return result
    })
  }

  async ngOnInit(): Promise<void> {
    const res = await this.http.get("http://localhost:3000/categories").toPromise();
    this.categories = res as Categories[]
  }

}
