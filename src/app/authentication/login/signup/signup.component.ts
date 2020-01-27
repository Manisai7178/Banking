import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor(private sSignupService:SignupService) {
    this.signupForm=new FormGroup({
      'customerUsername':new FormControl('',Validators.required),
      'account_no':new FormControl('',Validators.required),
      'customerPassword':new FormControl('',Validators.required),
      'clpwd':new FormControl('',Validators.required),
      'transactionPassword':new FormControl('',Validators.required),
      'ctpwd':new FormControl('',Validators.required),
    })
   }
   
  saveSignup(post){
      
      this.sSignupService.saveCustomerDetails(this.signupForm.value).subscribe((data:any)=>{
      alert("--->"+data);
      alert("Successfully registered")
      })
    }
  
      
    ngOnInit() {
    }

}
