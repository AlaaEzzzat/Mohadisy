import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminSettingsService } from 'src/app/@core/services/admin/admin-settings.service';
interface admin {
  adminProfile: {
    id: number;
    applicationUserId: string;
    firstName: string;
    lastName: string;
  };
}
@Component({
  selector: 'app-admin-setting-profile',
  templateUrl: './admin-setting-profile.component.html',
  styleUrls: ['./admin-setting-profile.component.scss']
})
export class AdminSettingProfileComponent implements OnInit {
  userformlogin: FormGroup;
  iProfileAdmin: any | undefined = undefined;
  state: any = 0;
  profileChange: admin = {} as admin;
  datas: any;
  message:any;
  show:boolean=false
  datasNotActive: any;
  constructor(private adminSettingsService: AdminSettingsService, private formbuilder: FormBuilder) {
    this.getProfileAdmin() 
    this.userformlogin = this.formbuilder.group({
      lastName: [, [Validators.required]],
      firstName: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
   
  }
  getProfileAdmin() {
    this.state = 1;
    this.adminSettingsService.getAdminProfile().subscribe((value) => {
      this.iProfileAdmin = value.data;
      this.profileChange=value.data;
    });
  }
  get lastName() {
    return this.userformlogin?.get('lastName');
  }
  get firstName() {
    return this.userformlogin?.get('firstName');
  }
  updateAdminProfile() {
    this.profileChange = {
      adminProfile: {
        id: this.iProfileAdmin.adminProfile.id,
        applicationUserId: this.iProfileAdmin.adminProfile.applicationUserId,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
      },
    };
    this.adminSettingsService
      .updateAdminProfile(this.profileChange.adminProfile)
      .subscribe((data) => {
       
        this.message=data.message
        this.show=true

        setInterval(() => {
          this.show=false
          }, 1000);
      });
    this.getProfileAdmin();
  }
  changeFirstOrLastName() {
    this.state = 2;
  }


}
