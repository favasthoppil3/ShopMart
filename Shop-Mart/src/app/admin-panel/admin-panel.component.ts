import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  // user: any;

  productForm=this.PF.group({
    P_name:['',[Validators.required]],
    P_image:['',[Validators.required]],
    P_price:['',[Validators.required]],
    P_category:['',[Validators.required]],
    offer_price:['',[Validators.required]],
    P2_image:['',[Validators.required]],
    P3_image:['',[Validators.required]],
    P4_image:['',[Validators.required]],
    P5_image:['',[Validators.required]],
    color:['',[Validators.required]],
    storage:['',[Validators.required]],
    ram:['',[Validators.required]],
    p_cam:['',[Validators.required]],
    S_cam:['',[Validators.required]],
    D_size:['',[Validators.required]],
    processor:['',[Validators.required]],
    description:['',[Validators.required]],
    battery:['',[Validators.required]],
    charger:['',[Validators.required]],

  })
  constructor(private PF:FormBuilder, private data:DataService) { }

  ngOnInit(): void {
  }

  Addproduct(){
    // var user = this.user;
   var name=this.productForm.value.P_name
   var image=this.productForm.value.P_image
   var price=this.productForm.value.P_price
   var offer_price=this.productForm.value.offer_price
   var category=this.productForm.value.P_category
   var P2_image=this.productForm.value.P2_image
   var P3_image=this.productForm.value.P3_image
   var P4_image=this.productForm.value.P4_image
   var P5_image=this.productForm.value.P5_image
   var storage=this.productForm.value.storage
   var color=this.productForm.value.color
   var ram=this.productForm.value.ram
   var D_size=this.productForm.value.D_size
   var P_cam=this.productForm.value.p_cam
   var S_cam=this.productForm.value.S_cam
   var processor=this.productForm.value.processor
   var description=this.productForm.value.description
   var battery=this.productForm.value.battery
   var charger=this.productForm.value.charger

   if(this.productForm.valid){
    this.data.addproduct(name,image,price,category,offer_price,P2_image,P3_image,P4_image,P5_image,storage,color,ram,D_size,processor,description,P_cam,S_cam,battery,charger).subscribe((data:any)=>{
      if(data){
        console.log("data",data)
      }
    })

   }else{
    alert("fill form")
   }

  }

}
