import { ClientService } from './../../@core/services/client/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent implements OnInit {
  status: boolean = false;
  username: string = localStorage.getItem('name') || '';
  showpopup: boolean = false;
  allServices: any = [];
  clickEvent() {
    this.status = !this.status;
  }
  constructor(private router: Router, private clientService: ClientService) {}

  ngOnInit(): void {}
  goToForm(formType: any) {
    console.log(formType.value.type);
    if (formType.value.type) {
      this.showpopup = false;
      this.clientService.requestedServiceId = formType.value.type;
      console.log(this.clientService.requestedServiceId);
      this.router.navigate(['usermanagement/askprice/projectInfo']);
    }
  }

  openPriceRequest() {
    this.clientService
      .getProjectServicesAndSubService()
      .subscribe((data: any) => {
        this.allServices = data.data.projectServices;
        console.log(this.allServices);
        this.showpopup = true;
      });
  }
}
