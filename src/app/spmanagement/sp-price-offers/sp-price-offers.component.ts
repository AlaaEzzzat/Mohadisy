import { SpPriceOfferService } from './../../@core/services/Provider/sp-price-offer.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IClientPayment } from './../../@models/IClientPayment';
import { PaymentService } from './../../@core/services/payment/payment.service';
import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import moment from 'moment';
@Component({
  selector: 'app-sp-price-offers',
  templateUrl: './sp-price-offers.component.html',
  styleUrls: ['./sp-price-offers.component.scss'],
})
export class SpPriceOffersComponent implements OnInit {
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
  type: number = Number(localStorage.getItem('typeId'));
  makeOfferForm: boolean = true;
  projectCategory: any = [
    { id: 1, name: 'طلبات عرض سعر ' },
    { id: 2, name: 'عروض مقدمة' },
    { id: 3, name: 'عروض مقبولة' },
    { id: 4, name: 'عروض مرفوضة' },
  ];
  ngOnInit(): void {
    this.userType = 'sp';
    this.clientService.getProjectServicesAndSubService().subscribe((data) => {
      this.projectServices = data.data.projectServices;
      this.activeCategory = this.projectCategory[0]?.id;

      this.getCategoryContent(this.activeCategory, this.page);
      this.spPriceOfferService
        .GetProjectServicesWithCountForSP()
        .subscribe((data) => {
          this.projectServicesWithCount = data.data;
          this.projectServicesWithCount.map((serv: any) => {
            this.projectServices.map((pro: any) => {
              if (serv.projectService.id == pro.id) {
                pro.count = serv.count;
              }
            });
          });
        });
    });
  }
  activeCategory: any = '';
  isActiveCategory(catId: any) {
    this.activeCategory = catId;
    this.getCategoryContent(catId, this.page);
  }

  constructor(
    private clientService: ClientService,
    private _toastr: ToastrService,
    private _HttpClient: HttpClient,
    private spPriceOfferService: SpPriceOfferService
  ) {}
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next = () => {
    if (this.page < this.totalpages) {
      this.page = this.page + 1;
      this.getCategoryContent(this.activeCategory, this.page);
    }
  };
  prev = () => {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.getCategoryContent(this.activeCategory, this.page);
    }
  };
  projectServicesWithCount: any;
 
  getMilestonse(selectedOfferId: any) {
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
  getCategoryContent(catId: any, page: any) {
    switch (catId) {
      case 1:
        this.spPriceOfferService
          .getSPNewProjects(page)
          .subscribe((data: any) => {
            this.projectServiesArrays = data.data;
            this.totalpages = this.projectServiesArrays.totalPages;
            this.counter(this.totalpages);
            this.activeProject = this.projectServiesArrays?.priceQuotes[0]?.id;
            this.selectedProject = this.projectServiesArrays?.priceQuotes[0];
            this.showDetails(this.selectedProject);
          });
        break;
      case 2:
        this.spPriceOfferService
          .GetSPPriceQuotesIAppliedFor(page)
          .subscribe((data: any) => {
            this.projectServiesArrays = data.data;
            this.totalpages = this.projectServiesArrays.totalPages;
            this.counter(this.totalpages);
            this.activeProject = this.projectServiesArrays.projects[0].id;
            this.selectedProject = this.projectServiesArrays.projects[0];
            this.showDetails(this.selectedProject);
          });
        break;
      case 3:
        this.spPriceOfferService
          .getSPAcceptedOffers(page)
          .subscribe((data: any) => {
            this.projectServiesArrays = data.data;
            this.totalpages = this.projectServiesArrays.totalPages;
            this.counter(this.totalpages);
            this.activeProject = this.projectServiesArrays.priceQuotes[0].id;
            this.selectedProject = this.projectServiesArrays.priceQuotes[0];
            this.showDetails(this.selectedProject);
          });
        break;
      case 4:
        this.spPriceOfferService
          .getSPRejectedOffers(page)
          .subscribe((data: any) => {
            this.projectServiesArrays = data.data;
            this.totalpages = this.projectServiesArrays.totalPages;
            this.counter(this.totalpages);
            this.activeProject = this.projectServiesArrays.priceQuotes[0]?.id;
            this.selectedProject = this.projectServiesArrays.priceQuotes[0];
            this.showDetails(this.selectedProject);
          });
        break;
    }
  }

  requiredWorks: any = [];
  getrequireWork(reqId: any) {
    this.clientService.getRequiredWorkByWorkId(reqId).subscribe((data: any) => {
      const index = this.requiredWorks.findIndex(
        (e: any) => e.id == data.data[0].id
      );
      if (index == -1) {
        this.requiredWorks.push(...data.data);
      }
    });
  }
  getDate(date: any) {
    return moment(date).utc().format('YYYY-MM-DD');
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    return Days;
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
  showDetails(project: any) {
    console.log(project);
    this.makeOfferForm=false
    project?.projectRequiredWorks?.length > 0
      ? this.mapOnProjectsReuiredWorks(project.projectRequiredWorks)
      : null;
    project?.projectComponents?.length
      ? this.mapOnProjectsComponets(project.projectComponents)
      : null;
    console.log(this.activeProjectReqWorks);
    console.log(this.activeProjectsComponents);
    this.selectedProject = project;

    console.log(this.selectedProject);
    this.activeProject = project?.id;
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

  showImg = (src: any) => {
    console.log(this.requiredWorks);
    console.log(this.projectMilestons);
    this.showModal = true;
    this.modalSrc = src;
  };
  requiredWorksNames(reqId: any) {
    var name;
    this.requiredWorks.map((work: any) => {
      if (work.id == reqId) {
        name = work.name;
      }
    });
    return name;
  }
  isActive: boolean = false;
  toggle = () => {
    this.showModal = !this.showModal;
  };
  makeOfferToggle = () => {
    this.makeOfferForm = !this.makeOfferForm;
  };
  
}
