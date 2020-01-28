import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCard, MatCardModule, MatCheckboxModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { FundstransferComponent } from './fundstransfer/fundstransfer.component';

import {

  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,

} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { ReactiveFormsModule, FormsModule, FormBuilder, FormControl } from "@angular/forms";





@NgModule({
  declarations: [DashboardComponent,FundstransferComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,MatButtonModule,
    MatToolbarModule, MatIconModule,MatListModule,
    MatCardModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule
  ],
})
export class DashboardModule { }
