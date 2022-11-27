import { SharedModule } from './../@shared/shared.module';
import { AutoFocus } from './../@shared/directives/auto-focus';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPriceOffersComponent } from './user-price-offers/user-price-offers.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfilecomplateComponent } from './profilecomplate/profilecomplate.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PaymentComponent } from './payment/payment.component';
import { ProjectComponent } from './project/project.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AutoFocus,
    UserDashBoardComponent,
    UserProfileComponent,
    UserPriceOffersComponent,
    UserMessagesComponent,
    UserhomeComponent,
    ProfilecomplateComponent,
    PaymentComponent,
    ProjectComponent
  ],
  imports: [
    SharedModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    UsermanagementRoutingModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 6,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
})
export class UsermanagementModule {}
