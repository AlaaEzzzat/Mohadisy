import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPmanagementRoutingModule } from './spmanagement-routing.module';
import { SpDashBoardComponent } from './sp-dash-board/sp-dash-board.component';
import { SpContributionsComponent } from './sp-contributions/sp-contributions.component';
import { SpPaymentsComponent } from './sp-payments/sp-payments.component';
import { SpProfileComponent } from './sp-profile/sp-profile.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpCompleteProfileComponent } from './sp-complete-profile/sp-complete-profile.component';
import { PrevWorksComponent } from './prev-works/prev-works.component';
import { CompanyCompleteProfileComponent } from './company-complete-profile/company-complete-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpMenuOffersComponent } from './sp-menu-offers/sp-menu-offers.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SpPriceOffersComponent } from './sp-price-offers/sp-price-offers.component';
import { DealWithOfferComponent } from './deal-with-offer/deal-with-offer.component';
import { SpAllProjectsComponent } from './sp-all-projects/sp-all-projects.component';

@NgModule({
  declarations: [
    SpDashBoardComponent,
    SpContributionsComponent,
    SpHomeComponent,
    SpProfileComponent,
    SpCompleteProfileComponent,
    PrevWorksComponent,
    CompanyCompleteProfileComponent,
    SpDashBoardComponent,
    SpContributionsComponent,
    SpPaymentsComponent,
    SpHomeComponent,
    SpProfileComponent,
    SpMenuOffersComponent,
    SpPriceOffersComponent,
    DealWithOfferComponent,
    SpAllProjectsComponent,

  ],
  imports: [
    CarouselModule ,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,
    MatIconModule,
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
