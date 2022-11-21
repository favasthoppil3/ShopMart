import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
  buynowPRoducts:any
  constructor(private data:DataService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe( params=>this.buyowProduct(params['id']))

  }
  buyowProduct(id:any){
    this.data.buy(id).subscribe((data:any)=>{
      if(data){
        console.log('buynow::::',data)
        this.buynowPRoducts=data.product
      }
    })
}

}