import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FundstransferComponent } from './fundstransfer/fundstransfer.component';


const routes: Routes = [
  {path:"",component:DashboardComponent,children:[
    {path:'fund',component:FundstransferComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
