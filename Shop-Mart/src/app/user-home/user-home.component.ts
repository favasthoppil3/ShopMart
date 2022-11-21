import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  AllProducts:any
  toggle:boolean=true

  Carts:any
  productid:any

  idd:any
  Uname:any
  Email:any 



  abc:any

  cardName:any
  cardPrice:any
  cardImage:any
  cardCategory:any
  AllProductDetails:any

  // id:any

  constructor(private data:DataService,private http:HttpClient,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe( params=>this.getUser(params['id']))

    this.getProducts()

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

 

  getProducts(){
    this.data.getproduct().subscribe((data:any)=>{
      if(data){
        console.log("adda",data.products)
        this.AllProducts=data.products
        
      }
    })
}

addtoCart(item:any){
this.Carts=item
console.log("Cart",this.Carts)

this.http.post('http://localhost:3000/api/cart/addcart/',this.Carts).subscribe((data:any)=>{
  if(data){
    this.toggle=!this.toggle
    console.log("Addtocart",data)
  }
})
}
viewCard(item:any){
  this.AllProductDetails=item
  this.cardName=item.name
  this.cardPrice=item.price
  this.cardImage=item.image
  this.cardCategory=item.category
  this.productid=item._id

  // console.log("Carsdsss",this.cardName)
}

//  BuyNowProduct(item:any){
//   this.abc=item
//   console.log("aall",this.abc)
//   console.log("idddd",this.abc._id)
  // this.data.buy(this.abc._id)
  // .subscribe((data:any)=>{
  //   if(data){
  //     console.log("buyproducts",data)
  //   }

  // })
  // this.route.navigateByUrl('/orderProduct')

// }


// oredrproduct(id:any){
//   this.id=id

//   console.log("idd:",this.id)

// }

}
