import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ChangeStatusProject } from './../../@models/change-status-project';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminprice-price-offers',
  templateUrl: './adminprice-price-offers.component.html',
  styleUrls: ['./adminprice-price-offers.component.scss']
})
export class AdminpricePriceOffersComponent implements OnInit {
  // errorCom:any;
  page: number = 1;
  newApi: number = 3;
  total!: number;
  iadminPriceQuotes: IadminPriceQuotes[] = [];
  dataPriceQuotes: any;
  firstObject: any;
  iChangeStatusCliend: ChangeStatusProject | undefined = undefined;
  // datas: any;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm: string = '';
  productCurrent:IadminPriceQuotes ={} as IadminPriceQuotes
  // productCurrent: any;
  id: any;
down:any;
userformMassage :FormGroup;

  messages:any;
  show:boolean=false;
  showDanger:boolean=false;
  isProcessing:boolean=true
  constructor(private ServicesProvidor: AdminProjectsService,private _HttpClient:HttpClient ,private formbuilder:FormBuilder) {
    this.userformMassage=this.formbuilder.group({
      massage:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getNewProjectsForAdmin();
  }
  getNewProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 1;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            console.log(this.firstObject.projectRequiredWorks);
            // this.isProcessing = false;

        }

        },error: (error) => {
              this.isProcessing = false;

            }
    }
    );
}


getUnderNegotiationProjects(){
  this.isProcessing = true;
  this.newApi =10;
  sessionStorage.removeItem('idProjects')
  sessionStorage.removeItem('projects')
  this.ServicesProvidor.getUnderNegotiationProjectsForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            console.log(this.firstObject.projectRequiredWorks);
        }
        },error: (error) => {
              this.isProcessing = false;
            }
          }
  );
}
  getAcceptedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi =6;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getAcceptedProjectsForAdmin(this.page).subscribe({
        next:(value) => {
          if(value !=null || value != undefined) {
            this.dataPriceQuotes = value.data.projects;
            this.iadminPriceQuotes = this.dataPriceQuotes;
            this.total = value.data.totalPages;
            this.firstObject = this.iadminPriceQuotes[0];
              this.objectProduct(this.firstObject, this.firstObject.id);
              console.log(this.firstObject.projectRequiredWorks);
          }
          },error: (error) => {
                this.isProcessing = false;
              }
            }
    );
  }

  getAllPriceQuotesForAdmin() {
    this.isProcessing = true;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')

    this.ServicesProvidor.getAllPriceQuotesForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            console.log(this.firstObject.projectRequiredWorks);
            // this.isProcessing = false;

        }

        },error: (error) => {
              this.isProcessing = false;

            }
    }



    );
  }

  getNotCompletedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 3;
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getNotCompletedProjectsForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            console.log(this.firstObject.projectRequiredWorks);
            // this.isProcessing = false;

        }

        },error: (error) => {
              this.isProcessing = false;

            }
    }



    );
  }

  getRejectedProjectsForAdmin() {
    this.isProcessing = true;
    this.newApi = 4
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getRejectedProjectsForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            console.log(this.firstObject.projectRequiredWorks);
            // this.isProcessing = false;

        }

        },error: (error) => {
              this.isProcessing = false;

            }
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
    this.productCurrent=this.productCurrent
    console.log(this.productCurrent);
    this.id = sessionStorage.getItem('idProjects');
    }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);

  }
  get massage(){
    return this.userformMassage?.get('massage');
  }
  // change stutas client
  //2
  changeToAccepted() {
    this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:5,
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
      this.getNewProjectsForAdmin()


    }
  }
//9
  changeToReject() {
    this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:9,
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
