import { loginUser } from './loginUser';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   ngOnInit() {
  }
  emailId : String;
  password : String;
  LoggedInUser = {} as loginUser;
 
  private apiUrl  : string = "http://localhost:8080/login";
  
  constructor(public loginService : LoginService,public http : HttpClient,public router:Router){  
  }
  
  onLogin(){
   
   this.LoggedInUser.emailId = this.emailId; 
    this.LoggedInUser.password = this.password;
    this.loginService.authenticate(this.LoggedInUser,() => {
      this.router.navigate(['dashboard']);  
    })
        return false;
      // return this.http.post(this.apiUrl,this.LoginUser)
      //  .subscribe(
      //   res => {
      //     console.log(res);
      //   },
      //   err => {
      //     console.log("Error occured"); 
      //   });
      
  }
}
