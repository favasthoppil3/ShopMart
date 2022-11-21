import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-order-view',
  templateUrl: './user-order-view.component.html',
  styleUrls: ['./user-order-view.component.css']
})
export class UserOrderViewComponent implements OnInit {
  orderItems:any

  idd:any
  Uname:any
  Email:any 
  cancelOrders:any

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe( params=>this.getUser(params['id']))
    this.orderGet()
  }

  orderGet(){
    this.http.get('http://localhost:3000/api/order/orderGet').subscribe((data:any)=>{
      if(data){
        console.log("orderGet::::",data)
        this.orderItems=data.orders
        console.log("orderGet::::",this.orderItems)

      }
    })
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

  ordercancel(item:any){
    this.cancelOrders=item._id
    this.http.delete('http://localhost:3000/api/order/orderDelete/'+this.cancelOrders).subscribe((data:any)=>{
      if(data){
        console.log("orderCancel::::",data)
        this.orderGet()

      }
    })
  }

}
