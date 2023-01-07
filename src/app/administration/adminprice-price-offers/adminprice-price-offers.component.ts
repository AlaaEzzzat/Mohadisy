import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ChangeStatusProject } from './../../@models/change-status-project';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IrequiredWorks } from 'src/app/@models/irequired-works';

@Component({
  selector: 'app-adminprice-price-offers',
  templateUrl: './adminprice-price-offers.component.html',
  styleUrls: ['./adminprice-price-offers.component.scss'],
})
export class AdminpricePriceOffersComponent implements OnInit {
  page: number = 1;
  newApi: number = 1;
  total: any = 0;
  pagenation: any = [];
  iadminPriceQuotes: IadminPriceQuotes[] = [];
  dataPriceQuotes: any;
  firstObject: any;
  iChangeStatusCliend: ChangeStatusProject | undefined = undefined;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm: string = '';
  productCurrent: IadminPriceQuotes = {} as IadminPriceQuotes;
  id: any;
  down: any;
  userformMassage: FormGroup;
  messages: any;
  show: boolean = false;
  showDanger: boolean = false;
  isProcessing: boolean = true;
  offersOfSelectedProject: any = [];
  showProjectProfile: boolean = false;
  requiredWorkId: IrequiredWorks[] = [];
  requiredWorkIdObject: any[] = [];
  set: any;
  componentId: any[] = [];
  organizationalServiceProviderProfileId: any;
  individualServiceProviderProfileId: any;
  projectResponsible: any;
  projNumber: any;
  resOffer: any[] = [];
  selectedOfferId: boolean = true;
  productCurrentOffers: any[] = [];
  messagesError:string|any=null

  constructor(
    private ServicesProvidor: AdminProjectsService,
    private _HttpClient: HttpClient,
    private formbuilder: FormBuilder
  ) {
    this.userformMassage = this.formbuilder.group({
      massage: ['', [Validators.required]],
    });
  }
  getNewbuildingContracting() {
    this.iadminPriceQuotes = [];
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          for (let data of value.data.projects) {
            if (data.projectService.id === 2) {
              this.iadminPriceQuotes.push(data);
            }
            this.total = value.data.totalPages;
          }
          if (this.iadminPriceQuotes.length != 0) {
            this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        }
      },
    });
  }
  getNewconsulting() {
    this.iadminPriceQuotes = [];
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          for (let data of value.data.projects) {
            if (data.projectService.name === 'استشارات هندسية') {
              this.iadminPriceQuotes.push(data);
            }
            this.total = value.data.totalPages;
          }
          if (this.iadminPriceQuotes.length != 0) {
            this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        }
      },
    });
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next = () => {
    if (this.page < this.total) {
      this.page = this.page + 1;
      this.choise();
    }
  };
  prev = () => {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.choise();
    }
  };
  ngOnInit(): void {
    this.getNewProjectsForAdmin();
  }

  choise() {
    switch (this.newApi) {
      case 1:
        this.getNewProjectsForAdmin();
        break;
      case 6:
        this.getAcceptedProjectsForAdmin();
        break;
      case 3:
        this.getNotCompletedProjectsForAdmin();
        break;
      case 4:
        this.getRejectedProjectsForAdmin();
        break;
      case 10:
        this.getUnderNegotiationProjects();
        break;
    }
  }
  getNewProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 1;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
        this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }

  getUnderNegotiationProjects() {
    this.isProcessing = true;
    this.newApi = 10;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getUnderNegotiationProjectsForAdmin(
      this.page
    ).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.priceQuotes;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.dataPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject?.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }
  getAcceptedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 6;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getAcceptedProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }

  getAllPriceQuotesForAdmin() {
    this.isProcessing = true;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');

    this.ServicesProvidor.getAllPriceQuotesForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }
  getNotCompletedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 3;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getNotCompletedProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }

  getRejectedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 4;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getRejectedProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        this.messagesError=error;

      },
    });
  }

  objectProduct(object?: any, id?: any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('projects', test);
    sessionStorage.setItem('idProjects', id);
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    this.productCurrent = this.productCurrent;
    this.id = sessionStorage.getItem('idProjects');
    this.projectRequiredWorks();
    this.projectComponents();
    if (this.productCurrent.offers.length > 0) {
      this.productCurrentOffers = [];
      for (this.projNumber of this.productCurrent.offers) {
        this.productCurrentOffers.push(this.projNumber);
      }
    } else {
      this.productCurrentOffers = [];
    }
  }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
  }
  getProjectResponsible(obj: any) {
    let idPerson = 0;
    if (obj.organizationalServiceProviderProfileId != null) {
      idPerson = obj.organizationalServiceProviderProfileId;
    } else if (obj.individualServiceProviderProfileId != null) {
      idPerson = obj.individualServiceProviderProfileId;
    }

    this.ServicesProvidor.getOfferSenderProfile(idPerson).subscribe({
      next: (data) => {
        this.projectResponsible = data.data;
      },
    });
  }
  resOffersOnProj() {
    this.selectedOfferId = false;
  }
  back() {
    this.selectedOfferId = true;
  }
  get massage() {
    return this.userformMassage?.get('massage');
  }

  changeToAccepted() {
    this.iChangeStatusCliend = {
      projectId: this.idProduct.id,
      projectStatusId: 5,
      notes: 'البيانات مكتمله',
      rejectionReasonId: null,
    };
    if (
      this.iChangeStatusCliend.projectStatusId ===
      this.idProduct.projectRequestStatus.projectStatusId
    ) {
      this.showDanger = true;
      setTimeout(() => {
        this.showDanger = false;
      }, 3000);
    } else {
      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show = true;
        this.getNewProjectsForAdmin();
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
      this.getNewProjectsForAdmin();
    }
  }
  //9
  changeToReject() {
    this.iChangeStatusCliend = {
      projectId: this.idProduct.id,
      projectStatusId: 9,
      notes: this.massage?.value,
      rejectionReasonId: null,
    };

    this.ServicesProvidor.changeProfileStatus(
      this.iChangeStatusCliend
    ).subscribe((data) => {
      this.show = true;
      this.getNewProjectsForAdmin();
      this.messages = data.message;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    });
  }
  changeToNotComplette() {
    this.iChangeStatusCliend = {
      projectId: this.idProduct.id,
      projectStatusId: 6,
      notes: this.massage?.value,
      rejectionReasonId: null,
    };

    this.ServicesProvidor.changeProfileStatus(
      this.iChangeStatusCliend
    ).subscribe((data) => {
      this.show = true;
      this.getNewProjectsForAdmin();
      this.messages = data.message;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    });
  }

  calculateDiff(sentOn: any) {
    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();

    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
  calculateDiffEend(sentOn: any) {
    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = sentOnDate.getTime() - todayDate.getTime();
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
      }
    );
  }
  projectRequiredWorks() {
    this.requiredWorkId = [];
    this.requiredWorkIdObject = [];
    let requiredWorkIdObjects: any;
    for (let projectRe of this.productCurrent.projectRequiredWorks) {
      this.ServicesProvidor.getRequiredWorkByWorkId(
        projectRe.requiredWorkId
      ).subscribe({
        next: (data) => {
          this.requiredWorkId.push(data.data);
          for (let requiredWork of this.requiredWorkId) {
            requiredWorkIdObjects = requiredWork;
            for (let requiredWorkObject of requiredWorkIdObjects) {
              this.requiredWorkIdObject.push(requiredWorkObject);
            }
            this.set = new Set(this.requiredWorkIdObject);
          }
        },
      });
    }
  }
  projectComponents() {
    this.componentId = [];
    for (let projectCom of this.productCurrent.projectComponents) {
      this.ServicesProvidor.getProjectComponentById(
        projectCom.componentId
      ).subscribe({
        next: (data) => {
          this.componentId.push(data.data.name);
        },
      });
    }
  }
}
