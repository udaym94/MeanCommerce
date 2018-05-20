import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartDetails: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.generateCartDetails().subscribe(response => this.cartDetails = response);
  }

}
