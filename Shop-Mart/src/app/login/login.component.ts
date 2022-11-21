import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  id:any

  loginForm = this.LF.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private LF: FormBuilder,
    private data: DataService,
    private route: Router,
    private http:HttpClient,
    
  ) {}

  ngOnInit(): void {
  

  }


  // ------------------------------

  login() {
    var email = this.loginForm.value.email;
    var password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      this.data.login(email, password).subscribe(
        (data: any) => {
          if (data) {
            console.log('addada', data)

            this.id=data.existUser._id
          
            console.log("iddddd::::",this.id)

            if(data.existUser.role=='user'){
            this.route.navigateByUrl('/home/'+this.id);
            console.log("role",data.existUser.role)
            }else if(data.existUser.role=='admin'){
            this.route.navigateByUrl('/admin');
            }
            
            // alert(data.message);

          } else {
            alert('error password');
          }
        },
        (data) => {
          alert(data.error.message);
        }
      );
    } else {
      alert('Not Valid');
    }
  }
}
