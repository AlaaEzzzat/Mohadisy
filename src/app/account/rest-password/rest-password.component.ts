import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss'],
})
export class RestPasswordComponent implements OnInit {
  restForm;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _toastr: ToastrService
  ) {
    this.restForm = this.formBuilder.group({
      token: [`${JSON.parse(localStorage.getItem('resetpassword') || '{}')}`],
      newPassword: ['', [Validators.required]],
      newPasswordVerified: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(this.restForm.value);
    this.auth
      .setnewPassword(
        `https://app.mohandisy.com/api/Account/resetPassword`,
        this.restForm.value
      )
      .subscribe((data) => {
        this._toastr.success(data.message);
        this.router.navigate(['/account/login']);
      });
  }

  ngOnInit(): void {}
}
