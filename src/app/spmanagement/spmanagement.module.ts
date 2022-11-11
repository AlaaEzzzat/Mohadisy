import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SPmanagementRoutingModule } from './spmanagement-routing.module';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
import { SpMessagesComponent } from './sp-messages/sp-messages.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpProjectsComponent } from './sp-projects/sp-projects.component';
import { SpPriceOffersComponent } from './sp-price-offers/sp-price-offers.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpProjectRequestComponent } from './sp-project-request/sp-project-request.component';
import { SpPinnedProjectComponent } from './sp-pinned-project/sp-pinned-project.component';
import { LayoutProjectComponent } from './layout-project/layout-project.component';
import { SpProjectRequestAllComponent } from './sp-project-request-all/sp-project-request-all.component';
import { SpCprojectRequestComponent } from './sp-cproject-request/sp-cproject-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpRequestAcceptComponent } from './sp-request-accept/sp-request-accept.component';
import { SpRequestRejectComponent } from './sp-request-reject/sp-request-reject.component';
import { SpProjectOfferComponent } from './sp-project-offer/sp-project-offer.component';
import { SpProjectNegotiationComponent } from './sp-project-negotiation/sp-project-negotiation.component';
import { SpProjectStatusComponent } from './sp-project-status/sp-project-status.component';

@NgModule({
  declarations: [
    SpDashBoardComponent,
    SpContributionsComponent,
    SpMessagesComponent,
    SpPaymentsComponent,
    SpProjectsComponent,
    SpPriceOffersComponent,
    SpHomeComponent,
    SpProfileComponent,
    SpProjectRequestComponent,
    SpPinnedProjectComponent,
    LayoutProjectComponent,
    SpProjectRequestAllComponent,
    SpCprojectRequestComponent,
    SpRequestAcceptComponent,
    SpRequestRejectComponent,
    SpProjectOfferComponent,
    SpProjectNegotiationComponent,
    SpProjectStatusComponent,
  ],
  imports: [
    CommonModule,
    SPmanagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule ,
  ],
})
export class SPmanagementModule {}
