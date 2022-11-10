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
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/@core/http/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  apiLinkuser = 'https://app.mohandisy.com/api/Role/getRoles';
  SignupForm;
  userdata: any;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _user: UserserviceService,
    private _toastr: ToastrService
  ) {
    this._user.getusers(this.apiLinkuser).subscribe((res) => {
      this.userdata = res.data;
    });

    this.SignupForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      // accountId: new FormArray([]),
      // accountId: [0, [Validators.required]],
    });
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
  onSubmit() {
    console.log(this.SignupForm.value);
    this.auth.signup(this.apiLink, this.SignupForm.value).subscribe((data) => {
      console.log(data);
      this._toastr.success(data.message);
      this.router.navigate(['/account/login']);
    });
  }
  categoriySelector: string = '';

  get f() {
    return this.SignupForm.controls;
  }
}
