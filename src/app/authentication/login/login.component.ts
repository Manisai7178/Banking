import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url:string="http://192.168.12.66:9191/customers/admin";
  result:any;
  loginForm: FormGroup;
  //data:any;
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private router:Router) {}
  ngOnInit() {

    this.loginForm =this.formBuilder.group({
      adminId: [''] ,
      adminPassword: ['']

     });
  }

  login():void{
    // this.router.navigate(['/login/admin']);

    console.log('hiiii');
    let url=this.url+"/"+this.loginForm.controls.adminId.value+"/"+this.loginForm.controls. adminPassword.value;
    alert(url);
    this.http.get(url).subscribe(data=>{
      alert('hii');
      this.router.navigate(['/login/admin']);
  })
  }



}




/*login(post){
    this.authService.authenticateUser(post).subscribe((data:any)=>{
if(data.sucess== 'sucess')  {
   this.router.navigate(['/login/dashboard']);

}
else{
  alert('invalid credentials')
}
    })
 if(post.username == "scott" && post.password == "tiger"){
 this.router.navigate(['/login/dashboard']);
}else {
 console.log('invalid')
   alert('Invalid Details')
 }
  }*/
