import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router) {
          this.loginForm = new FormGroup({
        'email': new FormControl('',[ Validators.required,Validators.email]),

       });

  }

  login(post){
if(post.email == ''){
   alert('Please enter Details')
 }
}

  ngOnInit() {
  }
ngOnDestroy(){

}
}
