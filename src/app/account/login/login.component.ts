import { ToastrService } from 'ngx-toastr';
import { ClientService } from './../../@core/services/client/client.service';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  accountStatus: any = {};
  LoginForm;
  constructor(
    private formBuilder: FormBuilder,
    private serviceProviderService: ServiceProviderService,
    private auth: AuthService,
    private clientService: ClientService,
    private router: Router,
    private _toastr: ToastrService,
    private api: ApiService
  ) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.auth
      .login(
        'https://app.mohandisy.com/api/Authenticate/userLogin',
        this.LoginForm.value
      )
      .subscribe((data) => {
        if (data.data.emailConfirmed) {
          this._toastr.info(data.message);
          this.serviceProviderService.personalData = data.data;
          localStorage.setItem('token', JSON.stringify(data.data.token));
          localStorage.setItem('role', JSON.stringify(data.data.roles[0]));
          localStorage.setItem('name', JSON.stringify(data.data.username));
          localStorage.setItem('email', JSON.stringify(data.data.email));
          localStorage.setItem(
            'phoneNumber',
            JSON.stringify(data.data.phoneNumber)
          );
          localStorage.setItem('id', JSON.stringify(data.data.id));
          this.clientService.getAccountStatus().subscribe((data: any) => {
            this.accountStatus = data.data.joinRequestStatus;
          });
          let roles = this.auth.getRole();
          if (
            roles == 'Admin' ||
            roles == 'Editor' ||
            roles == 'Financial Manager'
          ) {
            this.router.navigate(['/Admin/dashboard']);
          }
          if (roles == 'Service provider') {
            this.api
              .get(
                'https://app.mohandisy.com/api/OrganizationalServiceProvider/getProfile'
              )
              .subscribe((data) => {
                var type =
                  data.data.organizationalServiceProviderProfile.projectService
                    .id;
                localStorage.setItem('typeId', type);
              });
            localStorage.setItem(
              'type',
              JSON.stringify(data.data.accountType.key)
            );
            if (data.data.profileAccepted) {
              this.router.navigate(['/Spmanagement']);
            } else {
              if (data.data.profileCreated) {
                if (this.accountStatus.accountStatusId == 8) {
                  if (data.data.accountType.key == 'CO') {
                    this._toastr.info('نأمل ملئ البانات مره اخري');
                    this.router.navigate([
                      '/Spmanagement/competeProfileForCompany',
                    ]);
                  } else {
                    this.router.navigate(['/Spmanagement/completeProfile']);
                  }
                } else {
                  this.router.navigate(['/Spmanagement']);
                }
              } else {
                if (data.data.accountType.key == 'CO') {
                  this.router.navigate([
                    '/Spmanagement/competeProfileForCompany',
                  ]);
                } else {
                  this.router.navigate(['/Spmanagement/completeProfile']);
                }
              }
            }
          }
          if (roles == 'Client') {
            if (data.data.profileAccepted) {
              this.router.navigate(['/usermanagement']);
            } else {
              if (data.data.profileCreated) {
                if (this.accountStatus.accountStatusId == 8) {
                  this._toastr.info('نأمل ملئ البانات مره اخري');
                  this.router.navigate(['/usermanagement/profilecomplate']);
                } else {
                  this.router.navigate(['/usermanagement']);
                }
              } else {
                this._toastr.info('نأمل ملئ البانات مره اخري');

                this.router.navigate(['/usermanagement/profilecomplate']);
              }
            }
          }
        } else {
          this._toastr.error(data.data.message);
        }
      });
  }
  ngOnInit(): void {}
}
