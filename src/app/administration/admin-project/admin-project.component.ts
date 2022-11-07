import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ChangeStatusProject } from './../../@models/change-status-project';
import { Messages } from './../../@core/utils/Messages';
import { IadminProjects } from 'src/app/@models/iadmin-projects';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.scss'],
})
export class AdminProjectComponent implements OnInit {
  errorCom:any;
  page: number = 1;
  newApi: number = 3;
  total!: number;
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
  messages:any;
  show:boolean=false;
  showDanger:boolean=false;
  isProcessing:boolean=true

  constructor(private ServicesProvidor: AdminProjectsService,private _HttpClient:HttpClient) {
    this.getCurrentProjects()
  }


  ngOnInit(): void {
    // this.objectProductGet();
  }


  getCurrentProjects() {
    sessionStorage.clear()
    this.isProcessing = true;
    this.newApi = 3;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getCurrentProjectsForAdmin(this.page).subscribe(
      (value) => {
        if(value !=null || value != undefined) {

          this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(value);
        this.firstObject = this.iadminPriceQuotes[0];

          this.objectProduct(this.firstObject, this.firstObject.id);

        }

      },(error) => {
        this.isProcessing = false;
        }
    );
  }
  getPendingProject() {
    sessionStorage.clear()
    this.isProcessing = true;
    this.newApi = 4;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getPendingProjectsForAdmin(this.page).subscribe(
      (value) => {
        if(value !=null || value != undefined) {

        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(value);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }

    },(error) => {
      this.isProcessing = false;
      }
    );
  }

  getFinishedProjects() {
    sessionStorage.clear()
    this.isProcessing = true;
    this.newApi = 5;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getFinishedProjectsForAdmin(this.page).subscribe(
      (value) => {
        if(value !=null || value != undefined) {

        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }},(error) => {
        this.isProcessing = false;
        }
    );
  }

  getLateProjects(page:any) {
    sessionStorage.clear()
    this.newApi = 6;
    this.isProcessing = true;

    this.ServicesProvidor.getLateProjectsForAdmin(page).subscribe(
      (value) => {
        if(value !=null || value != undefined) {

        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }

    },(error) => {
      this.isProcessing = false;
      }
    )}


  getStoppedProjects() {
    sessionStorage.clear()
    this.newApi = 7;    this.isProcessing = true;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getStoppedProjectsForAdmin(this.page).subscribe(
      (value) => {
        if(value !=null || value != undefined) {

        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }},(error) => {
        this.isProcessing = false;
        }
    );
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

  calculateDiff(sentOn:any){

    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}
download(url: string,name:any) {
  return this._HttpClient.get(url, {responseType :'arraybuffer'}).subscribe((png)=>{
    const blob=new Blob([png],{type:'application/pdf'});
    const fileName=name;
    saveAs(blob,fileName)
  },err=>{
    console.log(err)
  }
  )

}
}
