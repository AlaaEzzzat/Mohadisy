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
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CountryTransformPipe } from '../@shared/Pipes/country-transform.pipe';
import { TestComponent } from './test/test.component';
import { AdminSettingUsersComponent } from './admin-setting-users/admin-setting-users.component';
import { AdminSettingChangeProfileComponent } from './admin-setting-change-profile/admin-setting-change-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminSpUpdataComponent } from './admin-sp-updata/admin-sp-updata.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
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
    TestComponent,
    AdminSettingUsersComponent,
    AdminSettingChangeProfileComponent,
    AdminSpUpdataComponent,
    FooterComponent,
    // CountryTransformPipe
    // CountryTransformPipe


  ],
  imports: [
CommonModule,
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
  ],
})
export class AdministrationModule {}
