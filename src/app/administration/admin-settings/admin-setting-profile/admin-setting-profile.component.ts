import { Component, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
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
  // usersActive: IuserAct[] = [];
  // usersNotActive: IusersNotAct[] = [];
  datasNotActive: any;
  constructor(private adminSettingsService: AdminSettingsService, private formbuilder: FormBuilder) {
    this.userformlogin = this.formbuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.getProfileAdmin() 
  }
  getProfileAdmin() {
    this.state = 1;
    this.adminSettingsService.getAdminProfile().subscribe((value) => {
      this.iProfileAdmin = value.data;
      console.log(this.iProfileAdmin);
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
        alert(`${data.message}`);
      });
    this.getProfileAdmin();
  }
  changeFirstOrLastName() {
    this.state = 2;

    //  id:this.state.id,
    //  applicationUserId:this.state.applicationUserId,
  }


}
