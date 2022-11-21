import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buynowPRoducts:any

  product:any
  productId:any

  getCarted:any
  constructor(private http:HttpClient,private data:DataService ,private route:Router) { }

  ngOnInit(): void {
  this.getCart()
  // this.router.params.subscribe( params=>this.buyowProduct(params['id']))

  }

  getCart(){
    this.http.get('http://localhost:3000/api/cart/getcart').subscribe((data:any)=>{
      if(data){
        console.log("getCArt",data)
        this.getCarted=data.cart
        console.log("affaca",this.getCarted)
        
      }
    })
  }
  removeCart(id:any){
    this.http.delete('http://localhost:3000/api/cart/'+id).subscribe((data:any)=>{
      if(data){
        console.log("deleteCarttttt",data)
      this.getCart();
      }

    })
  }


//   buyowProduct(id:any){
//     this.data.buy(id).subscribe((data:any)=>{
//       if(data){
//         console.log('buynow::::',data)
//         this.buynowPRoducts=data.product
//       }
//     })
// }

// ViewDetails(item:any){
//   this.product=item.price
//   this.productId=item._id
  

//   this.route.navigateByUrl('/order-palace/'+this.productId)



//   console.log("afafa::::",this.productId)

// }

} 
