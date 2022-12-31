import { SharedModule } from './../@shared/shared.module';
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
import { AdminSPComponent } from './admin-sp/admin-sp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminSpUpdataComponent } from './admin-sp-updata/admin-sp-updata.component';

import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminpricePriceOffersComponent,
    AdminProjectComponent,
    AdminClientsComponent,
    AdminContributionsComponent,
    AdminMessagesComponent,
    AdminSPComponent,
    
    AdminSpUpdataComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatSelectModule,
    AdministrationRoutingModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers:[
    MatDatepickerModule,
    MatNativeDateModule  
  ]
})
export class AdministrationModule {}
