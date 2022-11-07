import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { catchError, map, Observable, Observer } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface changeStatus{
  "projectId":number,
  "projectStatusId":number,
  "notes": "string",
  "rejectionReasonId": null
}
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
  iadminPriceQuotes: IadminPriceQuotes[] = [];
  dataPriceQuotes: any;
  firstObject: any;
  iChangeStatusCliend: changeStatus | undefined = undefined;
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



  constructor(private ServicesProvidor: AdminProjectsService,private _HttpClient:HttpClient) {
    this.getNewProjectsForAdmin();
  }


  ngOnInit(): void {
    this.objectProductGet();
  }


  getNewProjectsForAdmin() {
    this.newApi = 1;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.dataPriceQuotes = value.data.projects;
        this.iadminPriceQuotes = this.dataPriceQuotes;
        this.total = value.data.totalPages;

        this.firstObject = this.iadminPriceQuotes[0];

          this.objectProduct(this.firstObject, this.firstObject.id);
          console.log(this.firstObject.projectRequiredWorks)



      }
    );


    }



  getAcceptedProjectsForAdmin() {
    this.newApi = 2;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getAcceptedProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getAllPriceQuotesForAdmin() {
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')

    this.ServicesProvidor.getAllPriceQuotesForAdmin(this.page).subscribe(
      (value) => {
        this.dataPriceQuotes = value.data.priceQuotes;
        this.iadminPriceQuotes = this.dataPriceQuotes;
        this.total = value.data.totalPages;
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getNotCompletedProjectsForAdmin() {
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getNotCompletedProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.dataPriceQuotes = value.data.projects;
        this.iadminPriceQuotes = this.dataPriceQuotes;
        this.total = value.data.totalPages;
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }
  //
  getCurrentProjects() {
    this.newApi = 3;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getCurrentProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        // console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];

          this.objectProduct(this.firstObject, this.firstObject.id);
          console.log(this.firstObject.projectRequiredWorks)


      }
    );
  }
  getPendingProject() {
    this.newApi = 4;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getPendingProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.datas);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getFinishedProjects() {
    this.newApi = 5;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getFinishedProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getLateProjects(page:any) {
    this.newApi = 6;

    this.ServicesProvidor.getLateProjectsForAdmin(page).subscribe((value)=>{
      this.datas = value.data.projects;
          this.iadminPriceQuotes = this.datas;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
          this.objectProduct(this.firstObject, this.firstObject.id);
    })

    // try {
    //     let ser= this.ServicesProvidor.getLateProjectsForAdmin(page).pipe(
    //         map(value => {
    //           this.datas = value
    //           return this.datas;
    //         }),
    //         catchError(some_error => {
    //           console.log('error ', some_error);
    //           throw new Error('failed to discover the api.');
    //         }),
    //       );

    //       ser.subscribe((value)=>{
    //         this.datas = value.data.projects;
    //             this.iadminPriceQuotes = this.datas;
    //             this.total = value.data.totalPages;
    //             this.firstObject = this.iadminPriceQuotes[0];
    //             this.objectProduct(this.firstObject, this.firstObject.id);
    //       })
    //     } catch (e) {
    //       this.errorCom=`'api discover failed ' {e}`
    //       console.log('api discover failed ', e);
    //       throw new Error('failed to discover t')
    //     }


    // sessionStorage.removeItem('idProjects')
    // sessionStorage.removeItem('projects')
    // this.ServicesProvidor.getLateProjectsForAdmin(this.page).subscribe(
    //   (value) => {
    //     console.log(value);
    //     this.datas = value.data.projects;
    //     this.iadminPriceQuotes = this.datas;
    //     this.total = value.data.totalPages;
    //     this.firstObject = this.iadminPriceQuotes[0];
    //     this.objectProduct(this.firstObject, this.firstObject.id);
    //   }
    // );

  }

  getStoppedProjects() {
    this.newApi = 7;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getStoppedProjectsForAdmin(this.page).subscribe(
      (value) => {
        this.datas = value.data.projects;
        this.iadminPriceQuotes = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iadminPriceQuotes);
        this.firstObject = this.iadminPriceQuotes[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }
  // bagenations
  // choiseFunCallApiPagin(event: number) {
  //   this.page = event;
  //   switch (this.newApi) {
  //     case 1:
  //       this.getNewProjectsForAdmin();
  //       break;
  //     case 2:
  //       this.getAcceptedProjectsForAdmin();
  //       break;
  //     case 3:
  //       this.getCurrentProjects();
  //       break;
  //     case 4:
  //       this.getPendingProject();
  //       break;
  //     case 5:
  //       this.getFinishedProjects();
  //       break;
  //     case 6:
  //       this.getLateProjects();
  //       break;
  //     case 7:
  //       this.getStoppedProjects();
  //   }
  // }
  // details informatin
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
  // change stutas client
  //2
  changeToAccepted() {
    this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:2,
      notes: "string",
      rejectionReasonId: null
    };
    if (
      this.iChangeStatusCliend.projectStatusId ===
      this.idProduct.projectRequestStatus.projectStatusId
    ) {
      this.showDanger=true;
      setTimeout(()=>{
        this.showDanger=false
      }, 3000);
    } else {
      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show=true;
     this.getNewProjectsForAdmin()
    this.messages=data.message
    setTimeout(()=>{
      this.show=false
    }, 3000);
      });
      // this.getNewProjectsForAdmin()


    }
  }
//9
  changeToReject() {
    this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:2,
      notes: "string",
      rejectionReasonId: null
    };
    if (
      this.iChangeStatusCliend.projectStatusId ===
      this.idProduct.projectRequestStatus.projectStatusId
    ) {
      this.showDanger=true;
      setTimeout(()=>{
        this.showDanger=false
      }, 3000);
    } else {
      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show=true;
     this.getNewProjectsForAdmin()
    this.messages=data.message
    setTimeout(()=>{
      this.show=false
    }, 3000);
      });

  }
}
//6
  changeToNotComplette() {
      this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:6,
      notes: "string",
      rejectionReasonId: null
    };
    if (
      this.iChangeStatusCliend.projectStatusId ===
      this.idProduct.projectRequestStatus.projectStatusId
    ) {
      this.showDanger=true;
      setTimeout(()=>{
        this.showDanger=false
      }, 3000);
    } else {
      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show=true;
     this.getNewProjectsForAdmin()
    this.messages=data.message
    setTimeout(()=>{
      this.show=false
    }, 3000);
      });
    }
  }

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
