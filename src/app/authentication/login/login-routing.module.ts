import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'account', component: AccountdetailsComponent },
{ path: 'forget', component: ForgetPasswordComponent },
{path: 'dashboard', loadChildren: () => import('./../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
