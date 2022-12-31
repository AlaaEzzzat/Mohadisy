import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ConfirmcodeComponent } from './confirmcode/confirmcode.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { SilderaccountComponent } from './silderaccount/silderaccount.component';
import { environment } from 'src/environments/environment';
import { AccountFormComponent } from './account-form/account-form.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'confirmation', component: ConfirmcodeComponent },
  { path: 'resetpassword', component: RestPasswordComponent },

];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ConfirmcodeComponent,
    RestPasswordComponent,
    SilderaccountComponent,
    AccountFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    FormsModule, 
 

  ]
})
export class AccountModule {}
