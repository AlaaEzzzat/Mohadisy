import { ChatComponent } from './chat/chat.component';
import { ProjectComponent } from './project/project.component';
import { PaymentComponent } from './payment/payment.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserPriceOffersComponent } from './user-price-offers/user-price-offers.component';
import { ProfilecomplateComponent } from './profilecomplate/profilecomplate.component';

const routes: Routes = [
  {
    path: '',
    component: UserhomeComponent,
    children: [
      { path: 'dashboard', component: UserDashBoardComponent },
      { path: 'messages', component: UserMessagesComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'chat', component: ChatComponent },
      

      { path: 'offers', component: UserPriceOffersComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'profilecomplate', component: ProfilecomplateComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'project/:id', component: ProjectComponent },
      {
        path: 'askprice',
        loadChildren: () =>
          import('./ask-price/askprice.module').then(
            (m) => m.UsermanagementModule
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermanagementRoutingModule {}
