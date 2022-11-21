import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  AllProducts: any;
  id: any;
  deleteByid:any

  editForm = this.EF.group({
    P_name: [''],
    P_image: [''],
    P_price: [''],
    P_category: [''],
  });
  constructor(private data: DataService, private EF: FormBuilder) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.data.getproduct().subscribe((data: any) => {
      if (data) {
        console.log('getproducts', data.products);
        this.AllProducts = data.products;
      }
    });
  }

  editProduct(item:any) {
    this.id = item._id;
    console.log('iddd', this.id);

    var name = this.editForm.value.P_name;
    var image = this.editForm.value.P_image;
    var price = this.editForm.value.P_price;
    var category = this.editForm.value.P_category;

    this.data.editPrdct( name, image, price, category).subscribe((data:any) => {
        if (data) {
          console.log('dadataass', data);
        }
      });
  }
  

    deleteProduct(item:any){
      this.deleteByid=item
      console.log("::::", this.deleteByid)

      this.data.deletePrdct( this.deleteByid).subscribe((data:any)=>{
        if(data){
          console.log("deleteProduct",data)
        this.getProducts();
        }

      })
    }
}
