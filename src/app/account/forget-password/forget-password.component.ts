import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  type:string="forgetpassword";

  restForm;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _toastr: ToastrService
  ) {
    this.restForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit=()=>{
    this.auth
      .restpassword(
        `https://app.mohandisy.com/api/Authenticate/getResetPasswordToken?email=${this.restForm.value.email}`
      )
      .subscribe((data) => {
        this._toastr.success(data.message);
        this.router.navigate(['/account/confirmation']);
      });
  }
  ngOnInit(): void {}
}
