import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
  selector: 'app-confirmcode',
  templateUrl: './confirmcode.component.html',
  styleUrls: ['./confirmcode.component.scss'],
})
export class ConfirmcodeComponent implements OnInit {
  restForm;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _toastr: ToastrService
  ) {
    this.restForm = this.formBuilder.group({
      token: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    this.auth
      .confirmEmial(
        `https://app.mohandisy.com/api/Account/checkResetPasswordToken`,
        this.restForm.value
      )
      .subscribe((data) => {
        this._toastr.success(data.message);
        this.router.navigate(['/account/resetpassword']);
        localStorage.setItem(
          'resetpassword',
          JSON.stringify(this.restForm.value.token)
        );
      });
  }
  ngOnInit(): void {}
}
