import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { from } from 'rxjs';
import { Customer } from '../customer';
//import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
      authenticateUser(post){
    return this.http.post<any>('http://192.168.12.66:9191/login',post).pipe(map(data=>{
      console.log(data)
    }))

  }

  getCustomers():any{
        return this.http.get<Customer>('http://192.168.12.66:9191/customers/display')
    }

    saveBeneficiary(post){
      console.log(post);
      return this.http.post('http://192.168.12.66:9191/customers/beneficiary',post).pipe(map(data=>{
        alert('Done')
      }))
    }

    doTransfer(post){
      return this.http.post('http://192.168.12.66:9191/customers/transaction',post).pipe(map(data=>{

        alert('Transaction Done');
      }))
    }
}
