import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
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

const routes: Routes = [
  {
    path: '',
    component: SpHomeComponent,
    children: [
      { path: 'spmanagementHome', component: SpHomeComponent },
      { path: 'dashboard', component: SpDashBoardComponent },
      { path: 'messages', component: SpMessagesComponent },
      { path: 'offers', component: SpPriceOffersComponent },
      { path: 'payments', component: SpPaymentsComponent },
      { path: 'profile', component: SpProfileComponent },
      { path: 'contributions', component: SpContributionsComponent },
      { path: 'projects', component:LayoutProjectComponent ,
        children:
       [
         { path: 'all', component: SpProjectsComponent },
         {path:'request/pinned',component:SpPinnedProjectComponent},
         { path: 'request',component:SpProjectRequestComponent},
         { path: 'request/all',component:SpProjectRequestAllComponent},
         {path:'all/request',component:SpCprojectRequestComponent},
       ]
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
