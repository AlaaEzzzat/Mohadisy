import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminPaymentsSpComponent } from './admin-payments-sp/admin-payments-sp.component';
import { AdminPaymentsClientsComponent } from './admin-payments-clients/admin-payments-clients.component';
import { Routes ,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  { path: '',
  component: AdminPaymentsComponent,
  children: [
    {path:'sp',component:AdminPaymentsSpComponent},
    {path:'client',component:AdminPaymentsClientsComponent},
  ]},
    ];

@NgModule({
  declarations: [
    AdminPaymentsComponent,
    AdminPaymentsSpComponent,
    AdminPaymentsClientsComponent
  ],
  imports: [
  CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPaymentsModule { }
