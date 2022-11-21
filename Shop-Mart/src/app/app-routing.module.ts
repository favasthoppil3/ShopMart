import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrderviewComponent } from './admin-orderview/admin-orderview.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { BuynowComponent } from './buynow/buynow.component';
import { CartComponent } from './cart/cart.component';
import { IphonesComponent } from './iphones/iphones.component';
import { LoginComponent } from './login/login.component';
import { OrderPlaceComponent } from './order-place/order-place.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { RealmeComponent } from './realme/realme.component';
import { RegisterComponent } from './register/register.component';
import { SamsungComponent } from './samsung/samsung.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserOrderViewComponent } from './user-order-view/user-order-view.component';
import { UserProductComponent } from './user-product/user-product.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:'admin',component:AdminPanelComponent},
  {path:'products',component:AdminProductsComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home/:id',component:UserHomeComponent},
  {path:'home',component:UserHomeComponent},
  {path:'user-product',component:UserProductComponent},
  {path:'cart',component:CartComponent},
  {path:'viewuser',component:UserViewComponent},
  {path:'orderProduct/:id',component:OrderProductComponent},
  {path:'buynow/:id',component:BuynowComponent},
  {path:'order-palace/:id',component:OrderPlaceComponent},
  {path:'orderView-admin',component:AdminOrderviewComponent},
  {path:'userView-admin',component:UserOrderViewComponent},
  {path:'iphone-page',component:IphonesComponent},
  {path:'samsung-page',component:SamsungComponent},
  {path:'realme-page',component:RealmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
