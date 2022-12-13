import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-home',
  templateUrl: './sp-home.component.html',
  styleUrls: ['./sp-home.component.scss'],
})
export class SpHomeComponent implements OnInit {
  startChatwithAdmin: boolean = false;
  toggleStatus = () => {
    this.startChatwithAdmin = false;
  };
  data: any = [
    {
      title: ' الصفحه الرئيسيه  ',
      routing: '/Spmanagement/profile',
      image: 'assets/images/icon1.png',
    },
    {
      title: 'لوحة التحكم ',
      routing: '/Spmanagement/dashboard',
      image: 'assets/images/Group.png',
    },
    {
      title: 'عروض الاسعار',
      image: 'assets/images/blueprint.png',
      routing: '/Spmanagement/projects/price-offers',
    },
    {
      title: '2عروض الاسعار',
      image: 'assets/images/blueprint.png',
      routing: '/Spmanagement/priceOffers',
    },
    {
      title: 'مشاريعي  ',
      image: 'assets/images/blueprint.png',
      routing: '/Spmanagement/projects/status',
    },
    {
      title: 'اعمالي السابقة   ',
      image: 'assets/images/blueprint.png',
      routing: '/Spmanagement/prevWorks',
    },
    {
      title: 'الإيرادات  ',
      routing: '/Spmanagement/payments',
      image: 'assets/images/Group.png',
    },
    {
      title: 'رسائلي  ',
      routing: '/Spmanagement/chat',
      image: 'assets/images/chat.png',
    },
    {
      title: 'الشكاوي  ',
      routing: '/Spmanagement/compliant',
      image: 'assets/images/chat.png',
    },
  ];
  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}
