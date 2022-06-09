import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auctions} from "../../app/Pages/auctions-page/auctions";

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {
  auctions:Auctions[]=[]
  constructor(private http:HttpClient) {
  }
  async getAuctions(){
    const res = await this.http.get("http://localhost:3000/auctions").toPromise();
    if (!res) return
    this.auctions = res as Auctions[]
  }
}
