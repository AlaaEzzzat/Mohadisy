import { ChatComponent } from '../@shared/components/chat/chat.component';
import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';

import { SpMainProfileComponent } from './sp-main-profile/sp-main-profile.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { SpPriceOffersComponent } from './sp-price-offers/sp-price-offers.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpMessagesComponent } from './sp-messages/sp-messages.component';
import { SpProjectsComponent } from './sp-projects/sp-projects.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpProjectRequestComponent } from './sp-project-request/sp-project-request.component';
import { LayoutProjectComponent } from './layout-project/layout-project.component';
import { SpPinnedProjectComponent } from './sp-pinned-project/sp-pinned-project.component';
import { SpProjectRequestAllComponent } from './sp-project-request-all/sp-project-request-all.component';
import { SpCprojectRequestComponent } from './sp-cproject-request/sp-cproject-request.component';
import { SpRequestAcceptComponent } from './sp-request-accept/sp-request-accept.component';
import { SpRequestRejectComponent } from './sp-request-reject/sp-request-reject.component';
import { SpProjectOfferComponent } from './sp-project-offer/sp-project-offer.component';

import { SpProjectStatusComponent } from './sp-project-status/sp-project-status.component';
import { SpMenuOffersComponent } from './sp-menu-offers/sp-menu-offers.component';
import { SpProjectCurrentComponent } from './sp-project-current/sp-project-current.component';

const routes: Routes = [
  {
    path: '',
    component: SpHomeComponent,
    children: [
      { path: 'spmanagementHome', component: SpHomeComponent },
      { path: 'dashboard', component: SpDashBoardComponent },
      { path: 'messages', component: SpMessagesComponent },
      { path: 'chat', component: ChatComponent },

      { path: 'offers', component: SpPriceOffersComponent },
      { path: 'payments', component: SpPaymentsComponent },
      { path: 'profile', component: SpProfileComponent },
      { path: 'contributions', component: SpContributionsComponent },
      {
        path: 'projects',
        component: LayoutProjectComponent,
        children: [
          {
            path: '',
            component: SpMenuOffersComponent,
            children: [
              { path: 'new', component: SpProjectRequestAllComponent },
              { path: 'new/request', component: SpProjectRequestComponent },
              { path: 'accept', component: SpRequestAcceptComponent },
              { path: 'reject', component: SpRequestRejectComponent },
              { path: 'offer', component: SpProjectOfferComponent },
            ],
          },
          {
            path: 'status',
            component: SpProjectStatusComponent,
            children: [
              { path: 'current', component: SpProjectCurrentComponent },
            ],
          },
        ],
      },
      { path: 'all', component: SpProjectsComponent },
      { path: 'all/request', component: SpCprojectRequestComponent },

      { path: 'mainProfile', component: SpMainProfileComponent },

      { path: 'project', component: SpProjectsComponent },

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
