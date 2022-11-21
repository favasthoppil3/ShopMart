import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {
  items:any
  orders:any
  ordersProduct:any
  totalAmnt:any
  alertMessage:Boolean=false

  orderForm=this.OF.group({
    Fname:['',[Validators.required]],
    Lname:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Address:['',[Validators.required]],
    Landmark:['',[Validators.required]],
    Pincode:['',[Validators.required]]
  })
  order=this.OF.group({
    Payment:['',[Validators.required]]
  })

  constructor( private OF:FormBuilder,private http:HttpClient ,private data:DataService ,private route:ActivatedRoute) { }


  ngOnInit(): void {
  
  this.route.params.subscribe( params=>this.OrderPlace(params['id']))
    
  }


  OrderPlace(id:any){
    this.data.buy(id).subscribe((data:any)=>{
      if(data){
        console.log('placeorder::::',data)
        this.orders=data.product
      }
    })
}



  // submit(){

  //  if(this.orderForm.valid){
  //   const data ={
  //    Fname:this.orderForm.value.Fname,
  //    Lname:this.orderForm.value.Lname,
  //    Email:this.orderForm.value.Email,
  //   Phone:this.orderForm.value.Phone,
  //    Address:this.orderForm.value.Address,
  //   Landmark:this.orderForm.value.Landmark,
  //   Pincode:this.orderForm.value.Pincode
  // }
  // this.http.post('http://localhost:3000/api/order/placeOrder',data).subscribe((data:any)=>{
  //   if(data){
  //     console.log("order::::",data)
  //     alert("Successfully Address")
  //   }
  // })

  //  }
  // }


  orderNow(item:any){
    this.items=item
    console.log("items::::",this.items)
    if(this.orderForm.valid){

    //   const data ={
    //     Fname:this.orderForm.value.Fname,
    //     Lname:this.orderForm.value.Lname,
    //     Email:this.orderForm.value.Email,
    //    Phone:this.orderForm.value.Phone,
    //     Address:this.orderForm.value.Address,
    //    Landmark:this.orderForm.value.Landmark,
    //    Pincode:this.orderForm.value.Pincode
    //  }
    //  this.http.post('http://localhost:3000/api/order/placeOrder',data).subscribe((data:any)=>{
    //    if(data){
    //      console.log("order::::",data)
    //    }
    //  })



      
    if(this.order.valid){

     
    this.totalAmnt=Number(item.price)+0
    console.log( this.totalAmnt)
    const data={
      name:item.name,
      image:item.image,
      Product_price:item.price,
      Offer_price:item.price,
      Shipping:"0",
      Payment:this.order.value.Payment,
      Totalamount:this.totalAmnt,

      address:{
      Fname:this.orderForm.value.Fname,
        Lname:this.orderForm.value.Lname,
        Email:this.orderForm.value.Email,
       Phone:this.orderForm.value.Phone,
        Address:this.orderForm.value.Address,
       Landmark:this.orderForm.value.Landmark,
       Pincode:this.orderForm.value.Pincode
      }
      
    }
    if(data.Payment=='Cash on delivery'){
      this.http.post('http://localhost:3000/api/order/orderNow',data).subscribe((data:any)=>{
      if(data){
        console.log("Ordeow::::",data)
        alert("Your Product is Order")
      }
    })
      
    }
    

    }else{
      this.alertMessage=true
      alert("Please Choose Payment Method")
    }
    
  }else{
    alert("Fill Address")
  }
}



}
