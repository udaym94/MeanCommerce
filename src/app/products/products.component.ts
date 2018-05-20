import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  product: object;
  cartItemsNumber : number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(response => this.products = response);
  }

  addToCart(id){
    this.cartItemsNumber =  this.productService.addProductToCart(id)
    console.log(this.cartItemsNumber);
  }

}
