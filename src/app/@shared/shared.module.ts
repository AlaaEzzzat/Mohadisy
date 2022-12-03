import { ScrollToBottomDirective } from './directives/scroll-to-bottom';
import { ChatComponent } from './components/chat/chat.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArabicDatePipe } from './Pipes/arabic-date.pipe';
import { ArabicNumberPipe } from './Pipes/arabic-number.pipe';
import { SplitNameByCommaPipe } from './Pipes/split-name-by-comma.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { LandingComponent } from './components/landing/landing.component';
import { MsgToAdminComponent } from './components/msg-to-admin/msg-to-admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentLayoutComponent } from './components/payment-layout/payment-layout.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    ArabicDatePipe,
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    NotFoundComponent,
    NavbarComponent,
    LandingComponent,
    ChatComponent,
    ScrollToBottomDirective,
    MsgToAdminComponent,
    SidebarComponent,
    DashboardCardComponent,
    PaymentCardComponent,
    PaymentLayoutComponent,
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    ArabicDatePipe,
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    NavbarComponent,
    ChatComponent,
    MsgToAdminComponent,
    SidebarComponent,
    DashboardCardComponent,
    PaymentCardComponent,
    PaymentLayoutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
