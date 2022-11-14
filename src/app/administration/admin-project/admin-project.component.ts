import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ChangeStatusProject } from './../../@models/change-status-project';
import { Messages } from './../../@core/utils/Messages';
import { IadminProjects } from 'src/app/@models/iadmin-projects';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.scss'],
})
export class AdminProjectComponent implements OnInit {
  errorCom: any;
  page: number = 1;
  newApi: number = 1;
  total: any = 0;
  pagenation: any = [];
  iadminPriceQuotes: IadminProjects[] = [];
  dataPriceQuotes: any;
  firstObject: any;
  iChangeStatusCliend: ChangeStatusProject | undefined = undefined;
  datas: any;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm: string = '';
  productCurrent: any;
  id: any;
  // down
  userformMassage :FormGroup;
  messages:any;
  show:boolean=false;
  showDanger:boolean=false;
  isProcessing:boolean=true;
  constructor(
    private ServicesProvidor: AdminProjectsService,
    private _HttpClient: HttpClient ,private formbuilder:FormBuilder
  ) {
    this.userformMassage=this.formbuilder.group({
      massage:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCurrentProjects();
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next() {
    if (this.page < this.total) {
      this.page = this.page + 1;
      this.choise();
    }
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.choise();
    }
  }
  choise() {
    switch (this.newApi) {
      case 7:
        this.getStoppedProjects();
        break;
      case 6:
        this.getLateProjects();
        break;
      case 3:
        this.getCurrentProjects();
        break;
      case 4:
        this.getPendingProject();
        break;
      case 5:
        this.getFinishedProjects();
        break;
    }
  }
  //3
  getCurrentProjects() {
    this.isProcessing = true;
    this.newApi = 3;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getCurrentProjectsForAdmin(this.page).subscribe({

      next:(value) => {
        if (value != null || value != undefined) {
          this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          console.log(this.total);
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },error: (error) => {
        this.isProcessing = false;

      }
    });

  }
  // 4
  getPendingProject() {
    sessionStorage.clear();
    this.isProcessing = true;
    this.newApi = 4;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getPendingProjectsForAdmin(this.page).subscribe(
    {
      next:  (value) => {
        if (value != null || value != undefined) {
          this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          console.log(this.total);
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },error: (error) => {
        this.isProcessing = false;

      }
    }
    );
  }
  //5
  getFinishedProjects() {
    sessionStorage.clear();
    this.isProcessing = true;
    this.newApi = 5;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getFinishedProjectsForAdmin(this.page).subscribe(

     {
      next:(value) => {
        if (value != null || value != undefined) {
          this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          console.log(this.total);
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },error: (error) => {
        this.isProcessing = false;

      }
     }
    );
  }
  //6
  getLateProjects() {
    sessionStorage.clear();
    this.newApi = 6;
    this.isProcessing = true;

    this.ServicesProvidor.getLateProjectsForAdmin(this.page).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          console.log(this.total);
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (err) => {
        this.isProcessing = false;
      },
    });
  }

  //7
  getStoppedProjects() {
    sessionStorage.clear();
    this.newApi = 7;
    this.isProcessing = true;
    sessionStorage.removeItem('idProjects');
    sessionStorage.removeItem('projects');
    this.ServicesProvidor.getStoppedProjectsForAdmin(this.page).subscribe(
     {next: (value) => {
        if (value != null || value != undefined) {
          this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          console.log(this.total);
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
        }
      },
      error: (error) => {
        this.isProcessing = false;
      }
  });
  }

  objectProduct(object?: any, id?: any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('projects', test);
    sessionStorage.setItem('idProjects', id);
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
    this.id = sessionStorage.getItem('idProjects');
  }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.idProductSessionStorage);
  }

  //   // change stutas client
  //   //2
  //   changeToAccepted() {
  //     this.iChangeStatusCliend = {

  //       projectId: this.idProduct.id,
  //       projectStatusId:2,
  //       notes: "string",
  //       rejectionReasonId: null
  //     };
  //     if (
  //       this.iChangeStatusCliend.projectStatusId ===
  //       this.idProduct.projectRequestStatus.projectStatusId
  //     ) {
  //       this.showDanger=true;
  //       setTimeout(()=>{
  //         this.showDanger=false
  //       }, 3000);
  //     } else {
  //       this.ServicesProvidor.changeProfileStatus(
  //         this.iChangeStatusCliend
  //       ).subscribe((data) => {
  //         this.show=true;
  //      this.getNewProjectsForAdmin()
  //     this.messages=data.message
  //     setTimeout(()=>{
  //       this.show=false
  //     }, 3000);
  //       });
  //       // this.getNewProjectsForAdmin()

  //     }
  //   }
  // //9
  //   changeToReject() {
  //     this.iChangeStatusCliend = {

  //       projectId: this.idProduct.id,
  //       projectStatusId:2,
  //       notes: "string",
  //       rejectionReasonId: null
  //     };
  //     if (
  //       this.iChangeStatusCliend.projectStatusId ===
  //       this.idProduct.projectRequestStatus.projectStatusId
  //     ) {
  //       this.showDanger=true;
  //       setTimeout(()=>{
  //         this.showDanger=false
  //       }, 3000);
  //     } else {
  //       this.ServicesProvidor.changeProfileStatus(
  //         this.iChangeStatusCliend
  //       ).subscribe((data) => {
  //         this.show=true;
  //      this.getNewProjectsForAdmin()
  //     this.messages=data.message
  //     setTimeout(()=>{
  //       this.show=false
  //     }, 3000);
  //       });

  //   }
  // }
  // //6
  //   changeToNotComplette() {
  //       this.iChangeStatusCliend = {

  //       projectId: this.idProduct.id,
  //       projectStatusId:6,
  //       notes: "string",
  //       rejectionReasonId: null
  //     };
  //     if (
  //       this.iChangeStatusCliend.projectStatusId ===
  //       this.idProduct.projectRequestStatus.projectStatusId
  //     ) {
  //       this.showDanger=true;
  //       setTimeout(()=>{
  //         this.showDanger=false
  //       }, 3000);
  //     } else {
  //       this.ServicesProvidor.changeProfileStatus(
  //         this.iChangeStatusCliend
  //       ).subscribe((data) => {
  //         this.show=true;
  //      this.getNewProjectsForAdmin()
  //     this.messages=data.message
  //     setTimeout(()=>{
  //       this.show=false
  //     }, 3000);
  //       });
  //     }
  //   }

  calculateDiff(sentOn: any) {
    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }

  calculateDiffEend(sentOn:any){

    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime =  sentOnDate.getTime()-todayDate.getTime()
    // To calculate the no. of days between two dates
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }

  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      {
        next:(pptx) => {
          const blob = new Blob([pptx], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
          const fileName = name;
          saveAs(blob, fileName);
        },
    error:(err) => {
          console.log(err);
        }
      }
    );
  }
}
