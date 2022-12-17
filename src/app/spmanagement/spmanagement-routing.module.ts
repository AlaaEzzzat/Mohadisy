import { SpAllProjectsComponent } from './sp-all-projects/sp-all-projects.component';
import { SpPriceOffersComponent } from './sp-price-offers/sp-price-offers.component';
import { ComplaintComponent } from './../@shared/components/complaint/complaint.component';
import { ChatComponent } from '../@shared/components/chat/chat.component';
import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
const routes: Routes = [
  {
    path: '',
    component: SpHomeComponent,
    children: [
      { path: 'spmanagementHome', component: SpHomeComponent },
      { path: 'dashboard', component: SpDashBoardComponent },
      { path: 'payments', component: SpPaymentsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'priceOffers', component: SpPriceOffersComponent },
      { path: 'compliant', component: ComplaintComponent },
      { path: 'profile', component: SpProfileComponent },
      { path: 'contributions', component: SpContributionsComponent },
      { path: 'allProjects', component: SpAllProjectsComponent },
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
