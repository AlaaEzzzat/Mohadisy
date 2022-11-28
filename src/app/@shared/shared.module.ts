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
import { CalendarComponent } from './components/calendar/calendar.component';
import { LandingComponent } from './components/landing/landing.component';
import { MyCalendarComponent } from './components/my-calendar/my-calendar.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    ArabicDatePipe,
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    NotFoundComponent,
    NavbarComponent,
    CalendarComponent,
    LandingComponent,
    ChatComponent,
    ScrollToBottomDirective,
    MyCalendarComponent,
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
    CalendarComponent,
    ChatComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
