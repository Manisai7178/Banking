import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './authentication/home/home.component';
import { SignupComponent } from './authentication/login/signup/signup.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
