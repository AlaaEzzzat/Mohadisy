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
  selectedOffer: any = {};
  order: any = 0;
  selectedOfferId: any = 0;
  page: number = 1;
  totalpages: any = 0;
  pagenation: any = [];

  projectDtails: boolean = false;
  projectCostDtails: boolean = false;
  commmitments: boolean = false;
  conditions: boolean = false;
  rules: boolean = false;
  seeProjectInfo: boolean = false;
  usedMaterials: boolean = false;
  showProjectProfile: boolean = false;
  constructor(private clientService: ClientService) {}
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next() {
    if (this.page < this.totalpages) {
      this.page = this.page + 1;
      this.getAllProjectServices();
    }
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.getAllProjectServices();
    }
  }
  ngOnInit(): void {
    this.clientService.getProjectServicesAndSubService().subscribe((data) => {
      this.projectServices = data.data.projectServices;
      this.activeService = this.projectServices[0].id;
      this.getAllProjectServices();
    });
  }

  isActiveService(id: any) {
    this.activeService = id;
    this.offersOfSelectedProject = 0;
    this.projectServicesFullData = [];
    this.clientService.getProjectService(id).subscribe((data: any) => {
      this.projectServicesFullData = data.data;
      this.projectServiesArrays = this.projectServicesFullData.projects;
      this.showOffers(this.projectServiesArrays[0]);
    });
  }
  getAllProjectServices() {
    this.clientService
      .getProjectService(this.activeService, this.page)
      .subscribe((data: any) => {
        this.projectServicesFullData = data.data;
        console.log('projectOfServices : ');
        console.log(this.projectServicesFullData);
        this.projectServiesArrays = this.projectServicesFullData.projects;
        this.totalpages = this.projectServicesFullData.totalPages;
        this.counter(this.totalpages);

        this.activeProject = this.projectServiesArrays[0].id;
        this.selectedProject = this.projectServiesArrays[0];

        this.projectServiesArrays.map((project: any) => {
          if (project.id == this.activeProject) {
            this.offersOfSelectedProject = project.offers;
          }
        });
        if (this.offersOfSelectedProject.length > 0) {
          this.selectedOffer = this.offersOfSelectedProject[0];
          this.selectedOfferId = this.offersOfSelectedProject[0]?.id;
          if (this.selectedOffer.organizationalServiceProviderProfileId) {
            this.clientService
              .getOfferSender(
                this.selectedOffer.organizationalServiceProviderProfileId
              )
              .subscribe((offerSender: any) => {
                this.selectedOffer.offerSender = offerSender.data;
              });
          } else if (this.selectedOffer.individualServiceProviderProfileId) {
            this.clientService
              .getOfferSender(
                this.selectedOffer.individualServiceProviderProfileId
              )
              .subscribe((offerSender: any) => {
                this.selectedOffer.offerSender = offerSender.data;
              });
          }
        }
        console.log(this.selectedOffer);
      });
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }
  showProject() {
    this.showProjectProfile = true;
  }

  showOffers(project: any) {
    this.showProjectProfile = false;
    this.selectedProject = project;
    this.activeProject = project.id;
    this.offersOfSelectedProject = project.offers;

    if (this.offersOfSelectedProject.length > 0) {
      this.selectedOffer = this.offersOfSelectedProject[0];
      this.selectedOfferId = this.offersOfSelectedProject[0].id;
      if (this.selectedOffer.organizationalServiceProviderProfileId) {
        this.clientService
          .getOfferSender(
            this.selectedOffer.organizationalServiceProviderProfileId
          )
          .subscribe((offerSender: any) => {
            this.selectedOffer.offerSender = offerSender.data;
          });
      } else if (this.selectedOffer.individualServiceProviderProfileId) {
        this.clientService
          .getOfferSender(this.selectedOffer.individualServiceProviderProfileId)
          .subscribe((offerSender: any) => {
            this.selectedOffer.offerSender = offerSender.data;
          });
      }
    }
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
