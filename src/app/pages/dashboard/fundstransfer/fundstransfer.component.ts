import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { SignupService } from 'src/app/shared/signup.service';
import { AuthenticationService } from 'src/app/shared/authentication.service'
@Component({
  selector: 'app-fundstransfer',
  templateUrl: './fundstransfer.component.html',
  styleUrls: ['./fundstransfer.component.css']
})
export class FundstransferComponent implements OnInit {
  AddBenififcaryForm:FormGroup;
  FundsTransferForm:FormGroup;
  constructor(private accS:SignupService,private authenService:AuthenticationService) {
    this.AddBenififcaryForm=new FormGroup({
     'beneficiaryAccountNo':new FormControl(''),
     'beneficiaryName':new FormControl(''),
     'beneficiaryBranchIfsc':new FormControl(''),
     'accountNo':new FormControl('')
    })

    this.FundsTransferForm=new FormGroup({
      'modeOfPayment':new FormControl(''),
      'beneficiaryAccountNo':new FormControl(''),
      'beneficiaryName':new FormControl(''),
      'accountNo':new FormControl(''),
      'beneficiaryBranchIfsc':new FormControl(''),
      'amountCreditDebit':new FormControl(''),
      'transactionDate':new FormControl(''),
      
    })
  }
  AddBenfifciary(post){
    console.log(post)
    this.authenService.saveBeneficiary(this.AddBenififcaryForm.value).subscribe((data:any)=>{
      alert('Benficiary added successfully');
    })
  }
  FundsTransfer(post){
      this.authenService.doTransfer(this.FundsTransferForm.value).subscribe((data:any)=>{

      })
  }
  ngOnInit() {
  }

}
