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
  ],
})
export class SPmanagementModule {}
