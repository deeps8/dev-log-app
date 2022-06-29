import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //url
  URL:string = "http://localhost:3000/";

  //login status observable
  $loginStatus = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
    console.log("auth service");
   }

  loginUser(data:any){
    this.$loginStatus.next(true);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    this.http.post(this.URL+"user/login",data,{headers: headers,reportProgress:true}).pipe(

    )
  }

}
