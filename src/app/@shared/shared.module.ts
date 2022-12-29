import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { CarouselRateComponent } from './components/carousel-rate/carousel-rate.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { StartChatComponent } from './components/start-chat/start-chat.component';
import { CalenderComponent } from './components/calender/calender.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';
import { ImgModalComponent } from './img-modal/img-modal.component';
import { PriceOfferCardComponent } from './components/price-offer-card/price-offer-card.component';
import { PriceOfferProjectLayoutComponent } from './components/price-offer-project-layout/price-offer-project-layout.component';
import { PriceOfferProjectMainLayoutComponent } from './components/price-offer-project-main-layout/price-offer-project-main-layout.component';
import { MilestoneCardComponent } from './components/milestone-card/milestone-card.component';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PolicyComponent } from './components/policy/policy.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [];

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
    CarouselRateComponent,
    ProjectCardComponent,
    PaginationComponent,
    ComplaintComponent,
    StartChatComponent,
    CalenderComponent,
    WorkScheduleComponent,
    ImgModalComponent,
    PriceOfferCardComponent,
    PriceOfferProjectLayoutComponent,
    PriceOfferProjectMainLayoutComponent,
    MilestoneCardComponent,
    ProjectLayoutComponent,
    PolicyComponent,
  ],
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    MatDatepickerModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 6,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
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
    PaymentLayoutComponent,
    CarouselRateComponent,
    ProjectCardComponent,
    CalenderComponent,
    StartChatComponent,
    PaginationComponent,
    WorkScheduleComponent,
    ImgModalComponent,
    PriceOfferCardComponent,
    PriceOfferProjectLayoutComponent,
    PriceOfferProjectMainLayoutComponent,
    MilestoneCardComponent,
    ProjectLayoutComponent,
    PolicyComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
