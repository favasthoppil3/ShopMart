import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // isLoading:Boolean=true
  registerform=this.RF.group({
    username:['',[Validators.required]],
    email:['',[Validators.required]],
    mobile:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  constructor(private RF:FormBuilder,private data:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    var username=this.registerform.value.username
    var email=this.registerform.value.email
    var mobile=this.registerform.value.mobile
    var password=this.registerform.value.password
    if(this.registerform.valid){
      
      this.data.register(username,email,mobile,password).subscribe((data:any)=>{
        if(data){
          console.log("data",data)
          alert("Register successfully")
          this.route.navigateByUrl('/login')

        }
      },(data)=>{
        alert(data.error.message)

      })
    }else{
      alert("failed")
    }
  }
  


}
