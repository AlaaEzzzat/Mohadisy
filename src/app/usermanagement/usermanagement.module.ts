import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPriceOffersComponent } from './user-price-offers/user-price-offers.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfilecomplateComponent } from './profilecomplate/profilecomplate.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    UserDashBoardComponent,
    UserProfileComponent,
    UserPriceOffersComponent,
    UserProjectsComponent,
    UserMessagesComponent,
    UserhomeComponent,
    ProfilecomplateComponent,
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    CommonModule,
    UsermanagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
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
