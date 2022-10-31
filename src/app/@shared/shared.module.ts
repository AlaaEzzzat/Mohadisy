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

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    ArabicDatePipe,
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    NotFoundComponent,
  ],
  imports: [
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
  exports: [ArabicDatePipe, ArabicNumberPipe, SplitNameByCommaPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
