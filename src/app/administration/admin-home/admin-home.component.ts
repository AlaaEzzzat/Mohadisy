import { Component, OnInit } from '@angular/core';
import { AdminSettingsService } from './../../@core/services/admin/admin-settings.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  data:any=[
  
    {
    title:"لوحة التحكم ",
    routing:"/Admin/dashboard",
    image:"assets/icons/growth.png"
  },
  {
    title:" عروض الأسعار  ",
    routing:"/Admin/offers",
    image:"assets/icons/blueprint.png"
  },
  {
    title:"المشاريع  ",
    image:"assets/images/blueprint.png",
    routing:"/Admin/project"
  },

  {
    title:" مزودي الخدمة    ",
    image:"assets/icons/employee (1).png",
    routing:"/Admin/sp"
  },
  {
    title:"العملاء  ",
    routing:"/Admin/clients",
    image:"assets/icons/user (3).png"
  },
  {
    title:"الرسائل  ",
    routing:"/Admin/chat",
    image:"assets/images/chat.png"
  },
  {
    title:"المدفوعات  ",
    routing:"/Admin/payments/sp",
    image:"assets/images/hand.png"
  },
  {
    title:"الإعدادات  ",
    routing:"/Admin/settings/profile",
    image:"assets/images/settings.png"
  }
]
  check: boolean;
  counter: any;
  constructor(private serNot: AdminSettingsService) {
    this.check = false;
    this.serNot.getUserNotifications(this.check).subscribe((val) => {
      this.counter = val.data.length;
    });
  }
  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  ngOnInit(): void {}
}
