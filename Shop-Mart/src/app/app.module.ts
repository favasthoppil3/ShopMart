import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProductComponent } from './user-product/user-product.component';
import { CartComponent } from './cart/cart.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { UserViewComponent } from './user-view/user-view.component';
import { OrderComponent } from './order/order.component';
import { BuynowComponent } from './buynow/buynow.component';
import { OrderPlaceComponent } from './order-place/order-place.component';
import { AdminOrderviewComponent } from './admin-orderview/admin-orderview.component';
import { UserOrderViewComponent } from './user-order-view/user-order-view.component';
import { FooterComponent } from './footer/footer.component';
import { IphonesComponent } from './iphones/iphones.component';
import { SamsungComponent } from './samsung/samsung.component';
import { RealmeComponent } from './realme/realme.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AdminProductsComponent,
    RegisterComponent,
    LoginComponent,
    UserHomeComponent,
    UserProductComponent,
    CartComponent,
    OrderProductComponent,
    UserViewComponent,
    OrderComponent,
    BuynowComponent,
    OrderPlaceComponent,
    AdminOrderviewComponent,
    UserOrderViewComponent,
    FooterComponent,
    IphonesComponent,
    SamsungComponent,
    RealmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
