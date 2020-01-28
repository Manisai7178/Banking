import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-fundstransfer',
  templateUrl: './fundstransfer.component.html',
  styleUrls: ['./fundstransfer.component.css']
})
export class FundstransferComponent implements OnInit {
  AddBenififcaryForm:FormGroup;
  FundsTransferForm:FormGroup;
  constructor(private accS:SignupService) {
    this.AddBenififcaryForm=new FormGroup({
     'beneficiaryAccountNo':new FormControl(''),
     'beneficiaryName':new FormControl(''),
     'beneficiaryBranchIfsc':new FormControl('')

    })

    this.FundsTransferForm=new FormGroup({
      'beneficiaryAccountNo':new FormControl(''),
      'beneficiaryName':new FormControl(''),
      'beneficiaryBranchIfsc':new FormControl(''),
      'amount':new FormControl('')
    })
  }
  AddBenfifciary(post){

  }
  FundsTransfer(post){

  }
  ngOnInit() {
  }

}
