import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatDividerModule, MatTableModule } from '@angular/material';
import {MatListModule, MatListItem} from '@angular/material/list';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,  MatSidenavModule,MatButtonModule,
    MatToolbarModule, MatIconModule,MatListModule,
    MatCardModule,MatDividerModule,MatTableModule
  ]
})
export class AdminDashboardModule { }
