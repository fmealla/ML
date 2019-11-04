import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private LIST_API = "http://localhost:3000/items";
  private ITEM_API = "http://localhost:3000/items/";

  constructor(private httpClient: HttpClient) { }

  getItems(parameter: string) {
    let search = new HttpParams().set("q", parameter);
    return this.httpClient.get((this.LIST_API), {params: search});
  }

  getItemById(id: string) {
    return this.httpClient.get((this.ITEM_API.concat(id)));
  }

}
