import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Customer } from 'src/app/customer';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

customers:Customer[] = new Array();
  displayedColumns: string[] = ['customerId','customerUsername','gender','fatherName','mobileNo',
  'email','adhaarNo','panNo','dateOfBirth','address','state','city','pincode','accountType','annualIncome',
  'Action'];
  
  showFiller = false;
  url:string='http://192.168.12.66:9191/customers/emailAccNo/'
  constructor(private authService:AuthenticationService,private http:HttpClient) { }

  ngOnInit() {
    alert('customers data');
    this.authService.getCustomers().subscribe(data=> {
     this.customers = data;
    // alert(JSON.stringify(this.customers));
    });
    
  }
  
  onSubmit(value){

    console.log(value);
    this.http.get(this.url+value).subscribe(data=>{
     alert('hii'); 
    })
  }
}