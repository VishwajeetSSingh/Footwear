import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { ProductsComponent } from './component/products/products.component';
import { ShoesComponent } from './component/shoes/shoes.component';
import { SandalComponent } from './component/sandal/sandal.component';
import { CasualsComponent } from './component/casuals/casuals.component';
import { SportsComponent } from './component/sports/sports.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    OrderCompleteComponent,
    ProductsComponent,
    ShoesComponent,
    SandalComponent,
    CasualsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
