import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  getUsersTable:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.http.get('http://localhost:3000/api/users/').subscribe((data:any)=>{
      if(data){
        this.getUsersTable=data.users
        console.log("USER",this.getUsersTable)
      }
    })
  }

  removeUser(id:any){
    this.http.delete('http://localhost:3000/api/users/'+id).subscribe((data:any)=>{
      if(data){
        console.log("deleteProduct",data)
      this.getUsers();
      }

    })
  }

}
