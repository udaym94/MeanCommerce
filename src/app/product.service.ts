import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
  products;
  constructor(private http: Http) { }

  getProducts(){
    return this.http.get('/products').map(response => this.products = response.json().data);
  }

}
