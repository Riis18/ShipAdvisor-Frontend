import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from './user-login/sign-in/sign-in.component';
import {RegisterComponent} from './user-login/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {DashboardCustomerComponent} from './dashboard/dashboard-customer/dashboard-customer.component';
import {AuthloggedInGuard} from './shared/guards/authlogged-in.guard';
import {NavBarComponent} from './nav-bar/nav-bar/nav-bar.component';
import {CustomerShipmentComponent} from './customers/customer-shipment/customer-shipment.component';
import {CustomerShipmenttypeComponent} from './customers/customer-shipmenttype/customer-shipmenttype.component';
import {ContainerShipmentComponent} from './customers/create-shipments/container-shipment/container-shipment.component';

const routes: Routes = [
  { path: '', component: SignInComponent},
  { path: 'dashboard', component: DashboardCustomerComponent, pathMatch: 'full', canActivate: [AuthloggedInGuard] },
  { path: 'shipments', component: CustomerShipmentComponent, canActivate: [AuthloggedInGuard] },
  { path: 'shipmenttype', component: CustomerShipmenttypeComponent, canActivate: [AuthloggedInGuard] },
  { path: 'createContainer', component: ContainerShipmentComponent, canActivate: [AuthloggedInGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: SignInComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
