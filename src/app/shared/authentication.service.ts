import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
      authenticateUser(post){
    return this.http.post<any>('http://localhost:8181/login',post).pipe(map(data=>{
      console.log(data)
    }))
  }

 }

