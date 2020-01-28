import { Component, OnInit } from '@angular/core';
export interface BankData {
  cname: string;
  Acnumber: string;
}

const ELEMENT_DATA:BankData[]= [
  {cname: '1', Acnumber: 'Hydrogen'},

];


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['cname','Acnumber','Action'];
  dataSource = ELEMENT_DATA;
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }

}
