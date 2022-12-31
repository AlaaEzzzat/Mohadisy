import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../@core/api.service';
import { AuthService } from './../../@core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './../../@core/utils/confirmPassword';
import { UserserviceService } from 'src/app/@core/http/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  apiLinkuser = 'https://app.mohandisy.com/api/Role/getRoles';
  SignupForm: FormGroup;
  userdata: any;
  type:string="signup";

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _user: UserserviceService,
    private _toastr: ToastrService
  ) {
    this._user.getusers(this.apiLinkuser).subscribe((res: any) => {
      this.userdata = res.data;
    });
    this.SignupForm = this.formBuilder.group(
      {
        username: [
          '',
          [Validators.required, Validators.pattern('^[a-z][a-z0-9._]{3,}$')],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
            ),
          ],
        ],
        rePassword: ['', [Validators.required]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^(966)(5)[0-9]{8}$')],
        ],
        roleId: ['', [Validators.required]],
        conditions: ['', [Validators.required]],
      },
      {
        validator: ConfirmPasswordValidator('password', 'rePassword'),
      }
    );
  }

  newselect: string = '';

  ngDoCheck(): void {
    this.newselect = this.categoriySelector;
    if (this.newselect == 'e33f6a34-9655-4d3a-8bcd-dc9be0bb84fb') {
      this.SignupForm.addControl(
        'accountId',

        new FormControl(0, Validators.required)
      );
    } else {
      this.SignupForm.removeControl('accountId');
    }
  }
  ngOnInit(): void {}

  apiLink = 'https://app.mohandisy.com/api/Authenticate/userRegister';
  onSubmit=()=>{
    console.log(this.SignupForm.value);
    var user = this.SignupForm.value;
    delete user.rePassword;
    delete user.conditions;
    this.auth.signup(this.apiLink, user).subscribe((data: any) => {
      this._toastr.success(data.message);
      this.router.navigate(['/account/login']);
    });
  }
  categoriySelector: string = '';

  get f() {
    return this.SignupForm.controls;
  }
}
