import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({

  providedIn: 'root'
})
export class SignupService
 {

  constructor(private http:HttpClient, private router:Router) { }
  saveCustomerDetails(post){
    
    return this.http.post('http://192.168.12.66:9191/customers/register',post).pipe(map(data=>{
      console.log(data)
    }))
  }
  saveAccountDetails(post){
    return this.http.post('http://192.168.12.66:9191/customers/saving',post).pipe(map(data=>{
      alert('Details saved successfully');
      this.router.navigate(['/login/dashboard']);
     
    }))
  };
   getCountries()
   {
    return this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities")
    }
}
