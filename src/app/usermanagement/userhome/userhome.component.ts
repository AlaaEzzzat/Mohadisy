import { ClientService } from './../../@core/services/client/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent implements OnInit {
  data: any = [
    {
      title: 'معلوماتي  ',
      image: 'assets/images/profile.svg',
      routing: '/usermanagement/profile',
    },
    {
      title: 'لوحة التحكم ',
      routing: '/usermanagement/dashboard',
      image: 'assets/images/Group.png',
    },
    {
      title: ' عروض الأسعار  ',
      routing: '/usermanagement/offers',
      image: 'assets/images/blueprint.png',
    },
    {
      title: 'مشاريعي  ',
      image: 'assets/images/blueprint.png',
      routing: '/usermanagement/project',
    },
  
    {
      title: 'المدفوعات  ',
      routing: '/usermanagement/payment',
      image: 'assets/images/hand.png',
    },
    {
      title: 'رسائلي  ',
      routing: '/usermanagement/chat',
      image: 'assets/images/chat.png',
    },
    {
      title: ' الشكاوي   ',
      routing: '/usermanagement/complaint',
      image: 'assets/images/chat.png',
    },
  ];
  status: boolean = false;
  username: string = localStorage.getItem('name')?.replace(/"/g, '') || '';
  showpopup: boolean = false;
  allServices: any = [];
  constructor(private router: Router, private clientService: ClientService) {}
  startChatwithAdmin: boolean = false;
  toggleStatus = () => {
    this.startChatwithAdmin = false;
  };
  clickEvent() {
    this.status = !this.status;
  }

  /* ************************* */
  profileAccepted:any='';
  ngOnInit(): void {
    this.profileAccepted = localStorage.getItem('profileAccepted')
    console.log(this.profileAccepted)
  }
  /* *************** */
  signOut() {
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }
  showNotification() {}
  showSubMenu() {}
  goToForm(formType: any) {
    if (formType.value.type) {
      this.showpopup = false;
      this.clientService.requestedServiceId = formType.value.type;
      this.router.navigate(['usermanagement/askprice/projectInfo']);
    }
  }
  openPriceRequest() {
    this.clientService
      .getProjectServicesAndSubService()
      .subscribe((data: any) => {
        this.allServices = data.data.projectServices;
        this.showpopup = true;
      });
  }
}
