import { IMessage } from 'src/app/@models/message';
import { ChatService } from 'src/app/@core/services/chat/chat.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IClientPayment } from './../../@models/IClientPayment';
import { PaymentService } from './../../@core/services/payment/payment.service';
import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import moment from 'moment';
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
  usedMaterialsArray: any = [];
  showProjectProfile: boolean = false;
  paymethods: boolean = false;
  invoiceValue: any = 0;
  clientPaymentData: IClientPayment = {} as IClientPayment;
  PaymentMethodsList: any = [];
  activeProjectReqWorks: any = [];
  activeProjectsComponents: any = [];
  client: any = {};
  modalSrc: any = '';
  showModal: boolean = false;
  fristMilestoneId: any = 0;
  showMilestones: boolean = false;
  projectMilestons: any = [];
  userType: string = '';
  constructor(
    private clientService: ClientService,
    private paymentService: PaymentService,
    private _toastr: ToastrService,
    private _HttpClient: HttpClient,
    private chatService:ChatService
  ) {}
  counter=(x: number)=> {
    this.pagenation = [...Array(x).keys()];
  }
  next = () => {
    if (this.page < this.totalpages) {
      this.page = this.page + 1;
      this.getAllProjectServices();
    }
  };
  prev = () => {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.getAllProjectServices();
    }
  };
  ngOnInit(): void {
    this.userType = 'client';
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

  isActiveService=(id: any)=> {
    this.activeService = id;
    this.offersOfSelectedProject = 0;
    this.projectServicesFullData = [];
    this.clientService.getProjectService(id).subscribe((data: any) => {
      this.projectServicesFullData = data.data;
      this.projectServiesArrays = this.projectServicesFullData.projects;
      this.showOffers(this.projectServiesArrays[0]);
    });
  }

  getMilestonse=(selectedOfferId: any)=> {
    this.projectMilestons = [];
    this.clientService
      .getMilestonesByOfferId(selectedOfferId)
      .subscribe((data: any) => {
        this.projectMilestons = data.data;
        this.projectMilestons.map((mile: any) => {
          if (mile.requiredWorkId) {
            this.getrequireWork(mile.requiredWorkId);
          }
        });
      });
  }
  getAllProjectServices=()=> {
    this.clientService
      .getProjectService(this.activeService, this.page)
      .subscribe((data: any) => {
        this.projectServicesFullData = data.data;
        this.projectServiesArrays = this.projectServicesFullData.projects;
        this.totalpages = this.projectServicesFullData.totalPages;
        this.counter(this.totalpages);

        this.activeProject = this.projectServiesArrays[0].id;
        this.selectedProject = this.projectServiesArrays[0];
        this.projectServiesArrays.map((project: any) => {
          if (project.id == this.activeProject) {
            this.offersOfSelectedProject = project.offers;
            console.log(this.offersOfSelectedProject);
          }
        });
        if (this.offersOfSelectedProject.length > 0) {
          this.selectedOffer = this.offersOfSelectedProject[0];
          console.log(this.selectedOffer);
          this.selectedOfferId = this.offersOfSelectedProject[0]?.id;
          if (this.selectedOffer.organizationalServiceProviderProfileId) {
            this.clientService
              .getOfferSender(
                this.selectedOffer.organizationalServiceProviderProfileId
              )
              .subscribe((offerSender: any) => {
                this.selectedOffer.offerSender = offerSender.data;
                console.log(this.selectedOffer.offerSender);
              });
          } else if (this.selectedOffer.individualServiceProviderProfileId) {
            this.clientService
              .getOfferSender(
                this.selectedOffer.individualServiceProviderProfileId
              )
              .subscribe((offerSender: any) => {
                this.selectedOffer.offerSender = offerSender.data;
                console.log(this.selectedOffer.offerSender);
              });
          }
        }
      });
  }
  requiredWorks: any = [];
  getrequireWork=(reqId: any)=> {
    this.clientService.getRequiredWorkByWorkId(reqId).subscribe((data: any) => {
      const index = this.requiredWorks.findIndex(
        (e: any) => e.id == data.data[0].id
      );
      if (index == -1) {
        this.requiredWorks.push(...data.data);
      }
    });
  }
  getDate=(date: any)=> {
    return moment(date).utc().format('YYYY-MM-DD');
  }
  getTime=(end: any, start: any)=> {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    return Days;
  }
  showProject = () => {
    this.showProjectProfile = true;
  };
  mapOnProjectsReuiredWorks=(ProjectsReuiredWorks: any)=> {
    this.activeProjectReqWorks = [];
    ProjectsReuiredWorks.map((ProjectsReuiredWork: any) => {
      this.clientService
        .getRequiredWorkByWorkId(ProjectsReuiredWork.requiredWorkId)
        .subscribe((data) => {
          this.activeProjectReqWorks.push(...data.data);
        });
    });
  }
  mapOnProjectsComponets=(projectComponents: any)=> {
    this.activeProjectsComponents = [];
    projectComponents.map((projectComponent: any) => {
      this.clientService
        .getProjectComponentById(projectComponent.componentId)
        .subscribe((data) => {
          this.activeProjectsComponents.push(data.data);
        });
    });
  }
  showOffers = (project: any)=> {
    this.seeProjectInfo =false
    this.mapOnProjectsReuiredWorks(project.projectRequiredWorks);
    this.mapOnProjectsComponets(project.projectComponents);
    this.showProjectProfile = false;
    this.selectedProject = project;
    this.activeProject = project.id;
    this.offersOfSelectedProject = project.offers;
    this.isActive =
      this.offersOfSelectedProject.length == 0 ||
      (this.offersOfSelectedProject.length > 0 && this.showProjectProfile);
    if (this.offersOfSelectedProject.length > 0) {
      this.selectedOffer = this.offersOfSelectedProject[0];
      console.log(this.selectedOffer);
      this.selectedOfferId = this.offersOfSelectedProject[0].id;
      this.getMilestonse(this.selectedOfferId);
      if (this.selectedProject.projectService.id == 2) {
        this.clientService
          .getMaterialsByOfferId(this.selectedOfferId)
          .subscribe((data: any) => {
            this.usedMaterialsArray = data.data;
          });
      }
      if (this.selectedOffer.organizationalServiceProviderProfileId) {
        this.clientService
          .getOfferSender(
            this.selectedOffer.organizationalServiceProviderProfileId
          )
          .subscribe((offerSender: any) => {
            this.selectedOffer.offerSender = offerSender.data;
            console.log(this.selectedOffer.offerSender);
          });
      } else if (this.selectedOffer.individualServiceProviderProfileId) {
        this.clientService
          .getOfferSender(this.selectedOffer.individualServiceProviderProfileId)
          .subscribe((offerSender: any) => {
            this.selectedOffer.offerSender = offerSender.data;
            console.log(this.selectedOffer.offerSender);
          });
      }
    }
  }
  acceptOffer=(offer: any)=> {
    this.invoiceValue =
      offer.totalCost - offer.cost + offer.cost / offer.numberOfMilestones;
    this.paymentService.getMilestones(offer.id).subscribe((data: any) => {
      const milestones = data.data;
      milestones.map((milestone: any) => {
        if (milestone.isFirstMilestone) {
          this.fristMilestoneId = milestone.id;
        }
      });
    });
    var payData = {
      _invoiceAmount: this.invoiceValue,
      _currencyIso: 'SAR',
    };
    this.paymentService.initiatePayment(payData).subscribe({
      next: (response: any) => {
        this._toastr.info(response.Message);
        this.PaymentMethodsList = response.Data.PaymentMethods;
        this.PaymentMethodsList.map((method: any) => {
          if (method.PaymentMethodId == 2) {
            this.goToPay(method.PaymentMethodId);
          }
        });
        this.paymethods = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  goToPay=(payMethodId: any)=> {
    this.clientPaymentData.invoiceValue = this.invoiceValue;
    this.clientPaymentData.paymentMethodId = payMethodId;
    this.clientPaymentData.displayCurrencyIso = 'SAR';
    this.clientPaymentData.mobileCountryCode = '+996';
    this.clientPaymentData.callBackUrl = `https://app.mohandisy.com/api/Milestone/paidMilestone/${this.fristMilestoneId}`;
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
  download = (url: string, name: any) => {
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
  };
  deleteProject=(project: any)=> {
console.log(project)
    this.clientService?.deleteProject(project.id).subscribe((data) => {
      console.log(data)
console.log("deleted")
      this._toastr.info(data.message);
      this.getAllProjectServices();
    });
  }
  showImg = (src: any) => {
    this.showModal = true;
    this.modalSrc = src;
  };
  requiredWorksNames=(reqId: any)=> {
    var name;
    this.requiredWorks.map((work: any) => {
      if (work.id == reqId) {
        name = work.name;
      }
    });
    return name;
  }
  isActive: boolean = false;
  toggleShow = () => {
    this.showModal = !this.showModal;
  };
  message:IMessage= {} as IMessage;
  sendMsg =(message:any, receiverId:any) => {
console.log(message)
    var type: number = 1;
    if (message) {
      this.message.content = message;
      this.message.messageTypeId = type;
      this.message.receiverId = receiverId;
      this.sendMessageToEndPoint(this.message, receiverId);
    }
  }
  sendMessageToEndPoint(message: any, receiverId: any) {
    console.log(receiverId)
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        this._toastr.info(' تم ارسال الرساله بنجاح ')
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
