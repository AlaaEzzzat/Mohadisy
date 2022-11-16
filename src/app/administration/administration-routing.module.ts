import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminProjectComponent } from './admin-project/admin-project.component';
import { AdminpricePriceOffersComponent } from './adminprice-price-offers/adminprice-price-offers.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminContributionsComponent } from './admin-contributions/admin-contributions.component';
import { AdminSPComponent } from './admin-sp/admin-sp.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { TestComponent } from './test/test.component';
// import { AdminSettingsProfileComponent } from './admin-settings-profile/admin-settings-profile.component';
// import { AdminSettingUsersComponent } from './admin-setting-users/admin-setting-users.component';
// import { AdminSettingChangeProfileComponent } from './admin-setting-change-profile/admin-setting-change-profile.component';
import { AdminSpUpdataComponent } from './admin-sp-updata/admin-sp-updata.component';

const routes: Routes = [
  // { path: '', component: AdminHomeComponent },
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: 'adminHome', component: AdminHomeComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'clients', component: AdminClientsComponent },
      { path: 'messages', component: AdminMessagesComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: 'project', component: AdminProjectComponent },
      { path: 'offers', component: AdminpricePriceOffersComponent },
      { path: 'payments', component: AdminPaymentsComponent },
      { path: 'contributions', component: AdminContributionsComponent },
      { path: 'sp', component: AdminSPComponent },
      { path: 'updata', component: AdminSpUpdataComponent },
      { path: 'test', component: TestComponent },
      { path: '', redirectTo: 'clients', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AdministrationRoutingModule {}
