import { Component, OnInit } from '@angular/core';
import { AdminSettingsService } from './../../@core/services/admin/admin-settings.service';
import { IprofileAdmin } from './../../@models/iprofile-admin';

@Component({
  selector: 'app-admin-settings-profile',
  templateUrl: './admin-settings-profile.component.html',
  styleUrls: ['./admin-settings-profile.component.scss']
})
export class AdminSettingsProfileComponent implements OnInit {
  iProfileAdmin !: any;
  state :any|undefined= false
  constructor(private adminSettingsService:AdminSettingsService) { }

  ngOnInit(): void {
    this.adminSettingsService.getAdminProfile().subscribe((value) => {
      this.state= localStorage.getItem("STATE")
      this.iProfileAdmin= value.data





   });
  }

}
