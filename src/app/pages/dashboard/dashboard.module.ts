import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCard, MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,MatButtonModule,
    MatToolbarModule, MatIconModule,MatListModule,
    MatCardModule,
  ],
})
export class DashboardModule { }
