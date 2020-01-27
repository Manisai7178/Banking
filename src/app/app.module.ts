import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/login/signup/signup.component';
import { HomeComponent } from './authentication/home/home.component';
import { AccountdetailsComponent } from './authentication/login/accountdetails/accountdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { FundstransferComponent } from './pages/fundstransfer/fundstransfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FundstransferComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
