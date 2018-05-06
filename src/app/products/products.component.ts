import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(response => this.products = response);
  }

}
