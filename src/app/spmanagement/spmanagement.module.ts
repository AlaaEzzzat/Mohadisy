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
import { SpProjectRequestComponent } from './sp-project-request/sp-project-request.component';

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
    SpProjectRequestComponent,
  ],
  imports: [
    CommonModule,
    SPmanagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SPmanagementModule {}
