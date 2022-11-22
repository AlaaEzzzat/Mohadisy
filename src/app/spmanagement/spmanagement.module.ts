import { SharedModule } from './../@shared/shared.module';
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
import { SpMainProfileComponent } from './sp-main-profile/sp-main-profile.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SpProjectRequestComponent } from './sp-project-request/sp-project-request.component';
import { SpPinnedProjectComponent } from './sp-pinned-project/sp-pinned-project.component';
import { LayoutProjectComponent } from './layout-project/layout-project.component';
import { SpProjectRequestAllComponent } from './sp-project-request-all/sp-project-request-all.component';
import { SpCprojectRequestComponent } from './sp-cproject-request/sp-cproject-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
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

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    SpDashBoardComponent,
    SpContributionsComponent,
    SpMessagesComponent,
    SpPaymentsComponent,
    SpProjectsComponent,
    SpPriceOffersComponent,
    SpHomeComponent,
    SpMainProfileComponent,
    SpProfileComponent,
    SpCompleteProfileComponent,
    PrevWorksComponent,
    CompanyCompleteProfileComponent,
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
    SpProjectStatusComponent,
    SpMenuOffersComponent,
    SpProjectCurrentComponent,
    SpProjectPendingComponent,
    SpCprojectOfferComponent,
    SpCprojectAcceptComponent,
    SpCprojectRejectComponent,

  ],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,
    CommonModule,
    SPmanagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    }),
  ],

})
export class SPmanagementModule {}
