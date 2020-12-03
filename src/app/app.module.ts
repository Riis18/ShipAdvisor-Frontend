import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './user-login/register/register.component';
import { SignInComponent } from './user-login/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material-module';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { DashboardCustomerComponent } from './dashboard/dashboard-customer/dashboard-customer.component';
import { CustomerShipmentComponent } from './customers/customer-shipment/customer-shipment.component';
import { CustomerShipmenttypeComponent } from './customers/customer-shipmenttype/customer-shipmenttype.component';
import { ContainerShipmentComponent } from './customers/create-shipments/container-shipment/container-shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    RegisterComponent,
    SignInComponent,
    NavBarComponent,
    DashboardCustomerComponent,
    CustomerShipmentComponent,
    CustomerShipmenttypeComponent,
    ContainerShipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
