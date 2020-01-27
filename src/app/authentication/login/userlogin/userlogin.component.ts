import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.css"]
})
export class UserloginComponent implements OnInit {
  url: string = "http://192.168.12.66:9191/customers";
  result: any;
  userloginForm: FormGroup;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.userloginForm = this.formBuilder.group({
      customerUsername: [""],
      customerPassword: [""]
    });
  }

  login(): void {
    console.log("hiiii");
    let url=
      this.url +
      "/" +
      this.userloginForm
      .controls.customerUsername.value +
      "/" +
      this.userloginForm
      .controls.customerPassword.value;
    alert(url);
    this.http.get(url).subscribe(data => {
      alert("hii");
      this.router.navigate(["/login/dashboard"]);
    });
  }
}
