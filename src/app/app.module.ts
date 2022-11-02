import { FormsModule } from '@angular/forms';
import { HomeModule } from './Layout_HomePage/home.module';
import { AccountModule } from './account/account.module';
import { SharedModule } from './@shared/shared.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/@core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './@core/auth/interceptors/http-interceptor.interceptor';
import { ApiService } from 'src/app/@core/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent],
  imports: [
  SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountModule,
    CoreModule,
    HttpClientModule,
    NgxSpinnerModule,
    HomeModule,
    FormsModule,
    NgbModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
