import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminpricePriceOffersComponent } from './adminprice-price-offers/adminprice-price-offers.component';
import { AdminProjectComponent } from './admin-project/admin-project.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminContributionsComponent } from './admin-contributions/admin-contributions.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminSPComponent } from './admin-sp/admin-sp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminpricePriceOffersComponent,
    AdminProjectComponent,
    AdminClientsComponent,
    AdminContributionsComponent,
    AdminMessagesComponent,
    AdminPaymentsComponent,
    AdminSettingsComponent,
    AdminSPComponent,
  ],
  imports: [
CommonModule,
    AdministrationRoutingModule,
    NgxPaginationModule,
    FormsModule,

  ],
})
export class AdministrationModule {}
