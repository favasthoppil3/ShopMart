import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphones',
  templateUrl: './iphones.component.html',
  styleUrls: ['./iphones.component.css']
})
export class IphonesComponent implements OnInit {
  AllProducts:any
  ViewIphonePrdct:any

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(){
    this.http.get('http://localhost:3000/api/product/').subscribe((data:any)=>{
        if(data){
          console.log("adda",data.products)
          this.AllProducts=data.products
          this.ViewIphonePrdct=this.AllProducts.name
          console.log("adda",this.AllProducts)
  
          
        }
      })
  }

}
