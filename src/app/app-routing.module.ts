import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { CasualsComponent } from './component/casuals/casuals.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsComponent } from './component/products/products.component';
import { SandalComponent } from './component/sandal/sandal.component';
import { ShoesComponent } from './component/shoes/shoes.component';
import { SportsComponent } from './component/sports/sports.component';
// import { ShoesComponent } from './component/shoes/shoes.component';
import { WomenComponent } from './component/women/women.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"men",component:MenComponent},
  {path:"women",component:WomenComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"product-detail",component:ProductDetailsComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"order-complete",component:OrderCompleteComponent},
   {path:"products",component:ProductsComponent},
   {path:"products/shoes",component: ShoesComponent},
   {path:"products/sandal",component:SandalComponent},
   {path:"products/casuals",component:CasualsComponent},
   {path:"products/sports",component:SportsComponent},
   {path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
