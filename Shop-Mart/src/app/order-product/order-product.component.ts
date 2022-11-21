import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { UserHomeComponent } from '../user-home/user-home.component';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  orderPrdct:any

  Carts:any

  idd:any
  Uname:any
  Email:any 

  Image:any

  constructor(private data:DataService ,private route:ActivatedRoute ,private http:HttpClient){
  }
  ngOnInit(): void {
  this.route.params.subscribe( params=>this.orderProduct(params['id']))

  }

  getUser(id:any){
    this.idd=id
    console.log("::::",this.idd)
    this.http.get('http://localhost:3000/api/users/getByidUser/'+id).subscribe((data:any)=>{
      if(data){
        console.log("UserData::::",data)
        this.Uname=data.userByid.username
        this.Email=data.userByid.email

        console.log("username::::",this.Uname)

      }
    })
  }

  order:any

  orderProduct(id:any){
    this.data.buy(id).subscribe((data:any)=>{
      if(data){
        this.orderPrdct=data.product
        console.log("addadadff::::",data)
        console.log("addadadff::::",this.orderPrdct)
      }
    })
  }

  addtoCart(item:any){
    this.Carts=item
    console.log("Cart",this.Carts)
    
    this.http.post('http://localhost:3000/api/cart/addcart',this.Carts).subscribe((data:any)=>{
      if(data){
        // this.toggle=!this.toggle
        console.log("Addtocart",data)
      }
    })
    }

    imageView(item:any){
      this.Image=item.P2_image

    }


 

}
