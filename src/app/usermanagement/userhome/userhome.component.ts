import { ClientService } from './../../@core/services/client/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
/* import { SignalrService } from './../../@core/services/signalR/signalr.service'; */
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent implements OnInit {
  status: boolean = false;
  username: string = localStorage.getItem('name')?.replace(/"/g, '') || '';
  showpopup: boolean = false;
  allServices: any = [];
  clickEvent() {
    this.status = !this.status;
  }
  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit(): void {}

  search() {}
  signOut() {
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }
  showNotification() {}
  showSubMenu() {}
  goToForm(formType: any) {
    console.log(formType.value.type);
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
