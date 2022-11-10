import { Component, OnInit } from '@angular/core';
import { AdminServiceProvidorService } from './../../@core/services/admin/admin-service-providor.service';
import { AdminSettingsService } from './../../@core/services/admin/admin-settings.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  check:boolean;
  counter:any;
  constructor(private serNot:AdminSettingsService) {
this.check=false
    this.serNot.getUserNotifications(this.check).subscribe((val)=>{
      this.counter=val.data.length
      console.log(val.data)
    })
  }
  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  ngOnInit(): void {}
}
