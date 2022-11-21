import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  AllProducts:any
  toggle:boolean=true

  abc:any
  constructor(private data:DataService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.data.getproduct().subscribe((data:any)=>{
      if(data){
        console.log("adda",data.products)
        this.AllProducts=data.products
    
      }
    })
}

addtoCart(item:any){
this.abc=item
console.log("Cart",this.abc)

this.http.post('http://localhost:3000/api/cart/addcart',this.abc).subscribe((data:any)=>{
  if(data){
    this.toggle=!this.toggle
    console.log("Addtocart",data)
  }
})
}
viewProduct(item:any){
  
}
}
