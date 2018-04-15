import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Router,Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const appRoutes:Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'productdetail',
    component: ProductDetailComponent
  },
  {
    path:'cart',
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
