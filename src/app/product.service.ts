import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';

@Injectable()
export class ProductService {
  products: object;
  cartItemCount : number = 0;

  constructor(private http: Http) { }

  getProducts(){
    return this.http.get('/products').map(response => this.products = response.json().data);
  }

  getProductDetailsByID(id){
    let headers = new Headers();
    // let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('/productDetails/'+id, {headers: headers}).map(response => this.products = response.json().data);
  }

  addProductToCart(id){
    let currentItems : any;
    let cartItemsArr : any = Array();
    let cartObject : object = [];
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.http.get('/productDetails/'+id, {headers: headers}).map(response => this.products = response.json().data);
    currentItems = localStorage.getItem('cart');
    if(currentItems == null){
      cartItemsArr.push(id);
      this.cartItemCount = 1;
    }
    else{
      cartItemsArr = JSON.parse(currentItems);
      this.cartItemCount = cartItemsArr.length;
      if(this.cartItemCount > 0){
        cartItemsArr.push(id);
        this.cartItemCount += 1;
      }
      else if(this.cartItemCount == 0){
        cartItemsArr.push(id);
        this.cartItemCount = 1;
      }
    }
    currentItems = JSON.stringify(cartItemsArr);
    localStorage.setItem('cart', currentItems);
    return this.cartItemCount;
  }

  generateCartDetails(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let cartItems : any;
    let cartItemDetails: any = Array();
    cartItems = localStorage.getItem('cart');
    let cartItemsArray = JSON.parse(cartItems);
    console.log(cartItemsArray);
    if(cartItems == null){
      return false;
    }
    else{
      cartItemsArray.forEach(cartItemId => {
        console.log(cartItemId);
        this.http.get('/productDetails/'+cartItemId, {headers: headers}).map(response => console.log(response.json().data));
      });
      // this.http.get('/productDetails/5aef0e4016bea02930c6583c', {headers: headers}).map(response => cartItemsArray.push(response.json().data));
      console.log(cartItemDetails);
      return cartItemDetails;
    }
  }

}
