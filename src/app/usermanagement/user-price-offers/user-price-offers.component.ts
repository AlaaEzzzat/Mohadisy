import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-price-offers',
  templateUrl: './user-price-offers.component.html',
  styleUrls: ['./user-price-offers.component.scss'],
})
export class UserPriceOffersComponent implements OnInit {
  projectServices: any = [];
  projectSubServices: any = [];
  projectServicesFullData: any = [];
  showSubServies: any = [];
  activeService: any = 0;
  activeSubService: any = 0;
  activeProject: any = 0;
  selectedProject: any = {};
  activeSubServiceData: any = [];
  offersOfSelectedProject: any = [];
  projectServiesArrays: any = [];
  order: any = 0;
  selectedOffer: any = 0;

  projectDtails: boolean = false;
  projectCostDtails: boolean = false;
  commmitments: boolean = false;
  conditions: boolean = false;
  rules: boolean = false;
  seeProjectInfo: boolean = false;
  usedMaterials: boolean = false;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getProjectServicesAndSubService().subscribe((data) => {
      console.log('All : ');
      console.log(data.data);
      this.projectServices = data.data.projectServices;
      this.activeService = this.projectServices[0].id;

      this.clientService
        .getProjectSubService(this.activeService)
        .subscribe((data: any) => {
          this.projectServicesFullData = data.data;
          /* console.log('projectOfServices : ');
          console.log(this.projectServicesFullData); */
          this.projectServiesArrays = this.projectServicesFullData.projects;
          /*       console.log(this.projectServiesArrays); */
          this.activeProject = this.projectServiesArrays[0].id;
          this.selectedProject = this.projectServiesArrays[0];
          /* console.log(this.selectedProject);
          console.log(this.activeProject); */
          this.projectServiesArrays.map((project: any) => {
            if (project.id == this.activeProject) {
              this.offersOfSelectedProject = project.offers;
            }
            /* console.log(this.offersOfSelectedProject); */
          });
          this.selectedOffer = this.offersOfSelectedProject[0].id;
          /* console.log(this.selectedOffer); */
        });
    });
  }

  isActiveService(id: any) {
    this.activeService = id;
    this.offersOfSelectedProject = 0;
    this.projectServicesFullData = [];
    this.clientService.getProjectSubService(id).subscribe((data: any) => {
      this.projectServicesFullData = data.data;
      /* console.log('projectOfServices : ');
      console.log(this.projectServicesFullData); */
      this.projectServiesArrays = this.projectServicesFullData.projects;
      /* console.log(this.projectServiesArrays); */
      this.showOffers(this.projectServiesArrays[0]);
    });
  }

  getTime(end: any, start: any) {
    var startDate = new Date('06/30/2019');
    var endDate = new Date('07/30/2019');

    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }

  showOffers(project: any) {
    this.selectedProject = project;
    /* console.log(this.selectedProject); */
    this.activeProject = project.id;
    this.offersOfSelectedProject = project.offers;
    // console.log(this.offersOfSelectedProject);
    this.selectedOffer = this.offersOfSelectedProject[0].id;
    // console.log(this.selectedOffer);
  }

  acceptOffer(offerId: any) {
    this.clientService.acceptOffer(offerId).subscribe({
      next: (response: any) => {
        console.log('offer accepted');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
