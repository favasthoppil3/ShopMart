import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Buyproduct:any

  constructor(private http:HttpClient) { }
  register(username:any,email:any,mobile:any,password:any){
    const data={
      username,
      email,
      mobile,
      password
    }
    return this.http.post('http://localhost:3000/api/users/signup',data)
    
  }
  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post('http://localhost:3000/api/users/login',data)
  }

  addproduct(name:any,image:any,price:any,category:any,offer_price:any,P2_image:any,P3_image:any,P4_image:any,P5_image:any,storage:any,color:any,ram:any,D_size:any,processor:any,description:any,P_cam:any,S_cam:any,battery:any,charger:any){
    const data={
      name,
      image,
      price,
      category,offer_price,P2_image,P3_image,P4_image,P5_image,storage,color,ram,D_size,processor,description,P_cam,S_cam,battery,charger


    }
    return this.http.post('http://localhost:3000/api/product/add',data)
  }
  getproduct(){
    return this.http.get('http://localhost:3000/api/product/')

  }

  editPrdct(name:any,image:any,price:any,category:any){
    const data={
      name,
      image,
      price,
      category
    }
    return this.http.put('http://localhost:3000/api/product/update/',data)

  }
  deletePrdct(id:any){
    return this.http.delete('http://localhost:3000/api/product/'+id)

  }

 buy(id:any){
    console.log("idss::::",id)
    
    return this.http.get('http://localhost:3000/api/product/idproduct/'+id)
   
  }



}
