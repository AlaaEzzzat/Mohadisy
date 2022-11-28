import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminProjectsService } from './../../@core/services/admin/admin-projects.service';
import { IadminPriceQuotes } from 'src/app/@models/iadmin-price-quotes';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { ChangeStatusProject } from './../../@models/change-status-project';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IrequiredWorks } from 'src/app/@models/irequired-works';

@Component({
  selector: 'app-adminprice-price-offers',
  templateUrl: './adminprice-price-offers.component.html',
  styleUrls: ['./adminprice-price-offers.component.scss']
})
export class AdminpricePriceOffersComponent implements OnInit {
  // errorCom:any;
  page: number = 1;
  newApi: number = 1;
  total: any = 0;
  pagenation: any = [];
  // total!: number;
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
  isProcessing:boolean=true;
  offersOfSelectedProject: any = [];
  showProjectProfile: boolean = false;
  selectedOfferId: any = 0;

  requiredWorkId:IrequiredWorks[]=[];
  requiredWorkIdObject:any[]=[]
  set:any
  componentId:any[]=[];
  constructor(private ServicesProvidor: AdminProjectsService,private _HttpClient:HttpClient ,private formbuilder:FormBuilder) {
    this.userformMassage=this.formbuilder.group({
      massage:['',[Validators.required]],
    });
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
    // console.log( this.pagenation)


  }
  next() {
    if (this.page < this.total) {
      this.page = this.page + 1;
      this.choise()

    }
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.choise()
    }
  }
  ngOnInit(): void {
    this.getNewProjectsForAdmin();
  }

  choise(){
    switch(this.newApi){
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
    sessionStorage.removeItem('idProjects')
    sessionStorage.removeItem('projects')
    this.ServicesProvidor.getNewProjectsForAdmin(this.page).subscribe({
      next:(value) => {
        if(value !=null || value != undefined) {

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          // console.log(this.total)
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            // console.log(this.firstObject.projectRequiredWorks);
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
        console.log(value);

        if(value !=null || value != undefined) {
          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;
          this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            // console.log(this.firstObject.projectRequiredWorks);
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
            // console.log(this.total)
            this.counter(this.total);
            this.firstObject = this.iadminPriceQuotes[0];
              this.objectProduct(this.firstObject, this.firstObject.id);
              // console.log(this.firstObject.projectRequiredWorks);
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
            console.log(value);

          this.dataPriceQuotes = value.data.projects;
          this.iadminPriceQuotes = this.dataPriceQuotes;
          this.total = value.data.totalPages;            this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            // console.log(this.firstObject.projectRequiredWorks);
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
          this.total = value.data.totalPages;            this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            // console.log(this.firstObject.projectRequiredWorks);
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
          this.total = value.data.totalPages;            this.counter(this.total);
          this.firstObject = this.iadminPriceQuotes[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
            // console.log(this.firstObject.projectRequiredWorks);
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
    // console.log(this.productCurrent);
    this.id = sessionStorage.getItem('idProjects');
    this.projectRequiredWorks()
    this.projectComponents()

    }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('projects');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);

  }
  get massage(){
    return this.userformMassage?.get('massage');
  }
  // change stutas client
  //5
  changeToAccepted() {
    this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:5,
      notes: "البيانات مكتمله",
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
      notes: this.massage?.value,
      rejectionReasonId:null
    };

      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show=true;
      this.getNewProjectsForAdmin()
      this.messages = data.message;
      setTimeout(()=>{
        this.show=false
      }, 3000);
        }
        );


      }
//6
  changeToNotComplette() {
      this.iChangeStatusCliend = {

      projectId: this.idProduct.id,
      projectStatusId:6,
      notes:this.massage?.value,
      rejectionReasonId: null
    };

      this.ServicesProvidor.changeProfileStatus(
        this.iChangeStatusCliend
      ).subscribe((data) => {
        this.show=true;
     this.getNewProjectsForAdmin()
    this.messages=data.message
    setTimeout(()=>{
      this.show=false
    }, 1000);
      });

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
calculateDiffEend(sentOn:any){

  let todayDate = new Date();
  let sentOnDate = new Date(sentOn);
  sentOnDate.setDate(sentOnDate.getDate());
  let differenceInTime =  sentOnDate.getTime()-todayDate.getTime()
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
    // console.log(err)
  }
  )

}
projectRequiredWorks(){
  this.requiredWorkId=[]
  this.requiredWorkIdObject=[]
  let requiredWorkIdObjects:any;
  for(let projectRe of this.productCurrent.projectRequiredWorks){
    // console.log(projectRe.requiredWorkId)
    this.ServicesProvidor.getRequiredWorkByWorkId(projectRe.requiredWorkId).subscribe({
      next:((data)=>{
        this.requiredWorkId.push(data.data)
        // console.log(this.requiredWorkId)

        for(let requiredWork of this.requiredWorkId){
          requiredWorkIdObjects=requiredWork
          for(let requiredWorkObject of requiredWorkIdObjects){
            this.requiredWorkIdObject.push(requiredWorkObject)


          } this.set = new Set(this.requiredWorkIdObject)
          // console.log(this.set)

        }

      })
    })
  }

}
projectComponents(){
  this.componentId=[]
  for(let projectCom of this.productCurrent.projectComponents){
    this.ServicesProvidor.getProjectComponentById(projectCom.componentId).subscribe({
      next:((data=>{
            this.componentId.push(data.data.name)
            // console.log(this.componentId)
            // console.log(data)

      }))
    })

  }

}
}