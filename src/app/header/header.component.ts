import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService,
              private productService: ProductService
            ) { }
  // constructor(){  }

  ngOnInit() {
  }

}
