import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginUser } from './login/loginUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  LoggedInUser = {} as loginUser;
  authenticate(LoggedInUser, callback) {
                
        console.log(LoggedInUser.emailId + " " + LoggedInUser.password);
        
        const headers = new HttpHeaders(LoggedInUser ? {
           Authorization : 'Basic ' + btoa(LoggedInUser.emailId + ':' + LoggedInUser.password)
        } : {});
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        this.http.post("http://localhost:8080/expenses/65" ,{
          "title" : "demo",
          "date" : "2018-04-29",
          "amount": 8000,
        
          "transientCategoryName" : "Electricity",
        
          "description" : "demo"
        },{ headers : headers} )
       .subscribe(
        response => {
          if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        console.log(response);
        return callback && callback();
        
        },
        err => {
          console.log("Error occured"); 
        });
       

    }

}
