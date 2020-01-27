import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {


  accountdetails: FormGroup;
  public states:any
  constructor(private accountService:SignupService) {

    this.accountdetails= new FormGroup({
      'customerUsername' :new FormControl('', Validators.required),
      'fatherName':new FormControl('', Validators.required),
      'mobileNo':new FormControl('', Validators.required),
      'email':new FormControl('', Validators.required),
      'adhaarNo':new FormControl('', Validators.required),
      'panNo':new FormControl('', Validators.required),
      'occupationType':new FormControl('', Validators.required),
      'annualIncome':new FormControl('', Validators.required),
      'gender':new FormControl('', Validators.required),
      'address':new FormControl('', Validators.required),
      'dateOfBirth':new FormControl('',Validators.required),
      'state': new FormControl(''),
      'city':new FormControl(''),
      'pincode':new FormControl('',Validators.required)

    })

  }


  ngOnInit() {
    this.accountService.getCountries().subscribe(data=>{
      console.log(data);
      this.states=data
    })
  }
reset()
{
  this.accountdetails.reset();
}
saveAccountdetails(post)
{
  this.accountService.saveAccountDetails(post).subscribe((data:any)=>{
    if(!data){
alert(data)
    }
    else{
      alert(data)
    }
  })
console.log(post)
}
}
