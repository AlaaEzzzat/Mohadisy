import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { SpPriceOffersComponent } from './sp-price-offers/sp-price-offers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpMessagesComponent } from './sp-messages/sp-messages.component';
import { SpProjectsComponent } from './sp-projects/sp-projects.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpMainProfileComponent } from './sp-main-profile/sp-main-profile.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
const routes: Routes = [
  {
    path: '',
    component: SpHomeComponent,
    children: [
      { path: 'spmanagementHome', component: SpHomeComponent },
      { path: 'mainProfile', component: SpMainProfileComponent },
      { path: 'dashboard', component: SpDashBoardComponent },
      { path: 'messages', component: SpMessagesComponent },
      { path: 'project', component: SpProjectsComponent },
      { path: 'offers', component: SpPriceOffersComponent },
      { path: 'payments', component: SpPaymentsComponent },
      { path: 'profile', component: SpProfileComponent },
      { path: 'contributions', component: SpContributionsComponent },
      { path: 'completeProfile', component: SpCompleteProfileComponent },
      { path: 'prevWorks', component: PrevWorksComponent },
      {
        path: 'competeProfileForCompany',
        component: CompanyCompleteProfileComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SPmanagementRoutingModule {}
