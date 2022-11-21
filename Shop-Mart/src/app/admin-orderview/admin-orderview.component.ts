import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orderview',
  templateUrl: './admin-orderview.component.html',
  styleUrls: ['./admin-orderview.component.css']
})
export class AdminOrderviewComponent implements OnInit {
  orderAllItems:any

  Fname:any
  Lname:any
  Email:any
  Phone:any
  Pincode:any
  Landmark:any
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.getAllOrders()
  }

  getAllOrders(){
    this.http.get('http://localhost:3000/api/order/orderGet').subscribe((data:any)=>{
      if(data){
        console.log("::::",data)
        this.orderAllItems=data.orders
        console.log("orderAllItems::::",this.orderAllItems)

      }
    })
  }
  address(item:any){
    this.Fname=item.address.Fname
    this.Lname=item.address.Lname
    this.Email=item.address.Email
    this.Phone=item.address.Phone
    this.Landmark=item.address.Landmark
    this.Pincode=item.address.Pincode
  }

}
