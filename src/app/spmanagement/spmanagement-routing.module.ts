import { ComplaintComponent } from './../@shared/components/complaint/complaint.component';
import { SpProjectFinishedComponent } from './sp-project-finished/sp-project-finished.component';
import { ChatComponent } from '../@shared/components/chat/chat.component';
import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpMessagesComponent } from './sp-messages/sp-messages.component';
import { SpProjectsComponent } from './sp-projects/sp-projects.component';
import { SpHomeComponent } from './sp-home/sp-home.component';

import { SpProjectRequestComponent } from './sp-project-request/sp-project-request.component';
import { LayoutProjectComponent } from './layout-project/layout-project.component';
import { SpProjectRequestAllComponent } from './sp-project-request-all/sp-project-request-all.component';
import { SpCprojectRequestComponent } from './sp-cproject-request/sp-cproject-request.component';
import { SpRequestAcceptComponent } from './sp-request-accept/sp-request-accept.component';
import { SpRequestRejectComponent } from './sp-request-reject/sp-request-reject.component';
import { SpProjectOfferComponent } from './sp-project-offer/sp-project-offer.component';

import { SpProjectStatusComponent } from './sp-project-status/sp-project-status.component';
import { SpMenuOffersComponent } from './sp-menu-offers/sp-menu-offers.component';
import { SpProjectCurrentComponent } from './sp-project-current/sp-project-current.component';
import { SpProjectPendingComponent } from './sp-project-pending/sp-project-pending.component';
import { SpCprojectOfferComponent } from './sp-cproject-offer/sp-cproject-offer.component';
import { SpCprojectAcceptComponent } from './sp-cproject-accept/sp-cproject-accept.component';
import { SpCprojectRejectComponent } from './sp-cproject-reject/sp-cproject-reject.component';
import { SpRequestEditComponent } from './sp-request-edit/sp-request-edit.component';
import { SpCrequestEditComponent } from './sp-crequest-edit/sp-crequest-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SpHomeComponent,
    children: [
      { path: 'spmanagementHome', component: SpHomeComponent },
      { path: 'dashboard', component: SpDashBoardComponent },
      { path: 'messages', component: SpMessagesComponent },
      { path: 'payments', component: SpPaymentsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'compliant', component: ComplaintComponent },
      { path: 'profile', component: SpProfileComponent },
      { path: 'contributions', component: SpContributionsComponent },
      {
        path: 'projects',
        component: LayoutProjectComponent,
        children: [
          {
            path: 'price-offers',
            component: SpMenuOffersComponent,
            children: [
              { path: 'new', component: SpProjectRequestAllComponent },
              { path: 'new/request', component: SpProjectRequestComponent },
              { path: 'accept', component: SpRequestAcceptComponent },
              { path: 'reject', component: SpRequestRejectComponent },
              { path: 'offer', component: SpProjectOfferComponent },
              { path: 'offer/edit', component: SpRequestEditComponent },

              { path: 'all', component: SpProjectsComponent },
              { path: 'all/request', component: SpCprojectRequestComponent },
              { path: 'alloffer', component: SpCprojectOfferComponent },
              { path: 'alloffer/edit', component: SpCrequestEditComponent },
              { path: 'allaccept', component: SpCprojectAcceptComponent },
              { path: 'allreject', component: SpCprojectRejectComponent },
            ],
          },
          {
            path: 'status',
            component: SpProjectStatusComponent,
            children: [
              { path: 'current', component: SpProjectCurrentComponent },
              { path: 'pending', component: SpProjectPendingComponent },
              { path: 'finished', component: SpProjectFinishedComponent },
            ],
          },
        ],
      },
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
