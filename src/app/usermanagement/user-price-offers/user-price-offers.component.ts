import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IClientPayment } from './../../@models/IClientPayment';
import { PaymentService } from './../../@core/services/payment/payment.service';
import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

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
  acceptPrice: boolean = false;
  projectDtails: boolean = false;
  projectCostDtails: boolean = false;
  commmitments: boolean = false;
  conditions: boolean = false;
  rules: boolean = false;
  seeProjectInfo: boolean = false;
  usedMaterials: boolean = false;
  showProjectProfile: boolean = false;
  paymethods: boolean = false;
  invoiceValue: any = 0;
  clientPaymentData: IClientPayment = {} as IClientPayment;
  PaymentMethodsList: any = [];
  activeProjectReqWorks: any = [];
  activeProjectsComponents: any = [];
  client: any = {};
  constructor(
    private clientService: ClientService,
    private paymentService: PaymentService,
    private _toastr: ToastrService,
    private _HttpClient: HttpClient
  ) {}
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
      this.isActiveService(this.activeService);
    });
    this.clientService.getClientProfile().subscribe((data) => {
      this.client = data.data;
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
        this.projectServiesArrays = this.projectServicesFullData.projects;
        /*  *******************/

        /*  *******************/
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
  mapOnProjectsReuiredWorks(ProjectsReuiredWorks: any) {
    this.activeProjectReqWorks = [];
    ProjectsReuiredWorks.map((ProjectsReuiredWork: any) => {
      this.clientService
        .getRequiredWorkByWorkId(ProjectsReuiredWork.requiredWorkId)
        .subscribe((data) => {
          this.activeProjectReqWorks.push(...data.data);
        });
    });
  }
  mapOnProjectsComponets(projectComponents: any) {
    this.activeProjectsComponents = [];
    projectComponents.map((projectComponent: any) => {
      this.clientService
        .getProjectComponentById(projectComponent.componentId)
        .subscribe((data) => {
          this.activeProjectsComponents.push(data.data);
        });
    });
  }
  showOffers(project: any) {
    this.mapOnProjectsReuiredWorks(project.projectRequiredWorks);
    this.mapOnProjectsComponets(project.projectComponents);
    console.log(this.activeProjectReqWorks);
    console.log(this.activeProjectsComponents);

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
  acceptOffer(offer: any) {
    this.invoiceValue =
      offer.totalCost - offer.cost + offer.cost / offer.numberOfMilestones;
    console.log(this.invoiceValue);
    var payData = {
      _invoiceAmount: this.invoiceValue,
      _currencyIso: 'SAR',
    };
    this.paymentService.initiatePayment(payData).subscribe({
      next: (response: any) => {
        this._toastr.info(response.Message);
        this.PaymentMethodsList = response.Data.PaymentMethods;
        this.paymethods = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  goToPay(payMethodId: any) {
    this.clientPaymentData.invoiceValue = this.invoiceValue;
    this.clientPaymentData.paymentMethodId = payMethodId;
    this.clientPaymentData.displayCurrencyIso = 'SAR';
    this.clientPaymentData.mobileCountryCode = '+996';
    this.clientPaymentData.callBackUrl = 'https://www.google.com';
    this.clientPaymentData.errorUrl = 'https://www.facebook.com';
    this.clientPaymentData.language = 'ar';

    this.clientPaymentData.customerName =
      this.client?.firstName + ' ' + this.client?.lastName;
    this.clientPaymentData.customerMobile =
      this.client?.applicationUser.phoneNumber;
    this.clientPaymentData.customerEmail = this.client?.applicationUser.email;
    this.clientPaymentData.customerCivilId = this.client?.idNumber;
    this.paymentService.executePayment(this.clientPaymentData).subscribe({
      next: (response: any) => {
        window.location.href = response.Data.PaymentURL;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
