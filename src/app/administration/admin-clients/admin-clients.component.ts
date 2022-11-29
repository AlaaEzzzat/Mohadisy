import { Component, OnInit  } from '@angular/core';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { Observable, Observer } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {
  // page: number = 1;
  // newApi: number = 3;
  // total: number = 0;
  page: number = 1;
  newApi: number = 1;
  total: any = 0;
  pagenation: any = [];
  iChangeStatusCliend:IChangeStatus|undefined=undefined
  iProfileData: IadminClients [] = [];
  datas: any;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm: string=''
  productCurrent: any;
  id:any;
  // down
  sortedData:IadminClients []=[];
  firstObject:any;
  isProcessing: boolean=false
  userformMassage: FormGroup;
  show: boolean = false;
  showDanger: boolean = false;
  messages: any;
 
  constructor( private formbuilder: FormBuilder,private ServicesProvidor:AdminClientsService ,private _HttpClient:HttpClient) {

    this.userformMassage = this.formbuilder.group({
      massage: ['', [Validators.required]],
    });
  }


  ngOnInit(): void {
    this.getNewClientProfiles()

    this.objectProductGet();
  }
  get massage() {
    return this.userformMassage?.get('massage');
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


  choise(){
    switch(this.newApi){
      case 1:
        this.getNewClientProfiles();
        break;
        case 2:
        this.getActiveClientAcconting();
        break;
        case 3:
          this.getNonActiveClientAccount();
          break;
          case 4:
        this.getBlockedClientsProfiles();
        break;
        case 5:
          this.getExpiredClientsProfiles();
          break;
    }
  }


  getNewClientProfiles(){
    this.newApi=1;
    this.isProcessing = true;

    this.ServicesProvidor.getNewClientsProfiles(this.page).subscribe({
      next:(value) => {
        if(value !=null && value != undefined &&value.data.totalPages != 0) {
          // console.log(value)

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      // console.log(this.total)
      this.counter(this.total);
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id)
        }else{
          this.isProcessing = false;

        }
      },error: (error) => {
        this.isProcessing = false;

      }

    });

  }

  getActiveClientAcconting(){
    this.newApi=2
    this.isProcessing = true;

    this.ServicesProvidor.getActiveClientsProfiles(this.page).subscribe({
      next:(value) => {
        if(value !=null && value != undefined &&value.data.totalPages != 0) {

        this.datas = value.data.profiles
        this.iProfileData = this.datas;
        this.total = value.data.totalPages; 
        //  console.log(this.total)
        this.counter(this.total);
        // console.log(value)
        this.firstObject=this.iProfileData[0]
        this.objectProduct(this.firstObject,this.firstObject.id)}
        else{
          this.isProcessing = false;

        }
      },error: (error) => {
        this.isProcessing = false;

      }

    });
  }

  getNonActiveClientAccount(){
    this.newApi=3
    this.isProcessing = true;

    this.ServicesProvidor.getNonActiveClientProfiles(this.page).subscribe({
      next:(value) => {
        if(value !=null && value != undefined &&value.data.totalPages != 0) {

        this.datas = value.data.profiles
        this.iProfileData = this.datas;
        this.total = value.data.totalPages; 
        //  console.log(this.total)
        this.counter(this.total);
        this.firstObject=this.iProfileData[0]
        this.objectProduct(this.firstObject,this.firstObject.id);
        }else{
          this.isProcessing = false;

        }
      },error: (error) => {
        this.isProcessing = false;

      }
    });

  }
  getBlockedClientsProfiles(){
    this.newApi=4
    this.isProcessing = true;

    this.ServicesProvidor.getBlockedClientsProfiles(this.page).subscribe({
      next:(value) => {
        if(value !=null && value != undefined &&value.data.totalPages != 0) {

        this.datas = value.data.profiles
        this.iProfileData = this.datas;
        this.total = value.data.totalPages; 
        //  console.log(this.total)
        this.counter(this.total);
        // console.log(this.datas)
        this.firstObject=this.iProfileData[0]
        this.objectProduct(this.firstObject,this.firstObject.id)
      }else{
          this.isProcessing = false;

        }
      },error: (error) => {
        this.isProcessing = false;

      }
    });
  }
  getExpiredClientsProfiles(){
    this.newApi=5
    this.isProcessing = true;

    this.ServicesProvidor.getExpiredClientsProfiles(this.page).subscribe({
      next:(value) => {
        if(value !=null && value != undefined &&value.data.totalPages != 0) {

        this.datas = value.data.profiles
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;  console.log(this.total)
        this.counter(this.total);
        // console.log(this.iProfileData)
        this.firstObject=this.iProfileData[0]
        this.objectProduct(this.firstObject,this.firstObject.id);
      } else{
        this.isProcessing = false;

      }
      },error: (error) => {
        this.isProcessing = false;

      }
    });
  }
  // bagenations
  // choiseFunCallApiPagin(event: number) {
  //   this.page = event;
  //   switch (this.newApi) {
  //     case 1:
  //       this.getNewClientProfiles();
  //       break;
  //     case 2:
  //       this.getActiveClientAcconting();
  //       break;
  //     case 3:
  //       this.getNonActiveClientAccount(this.page);
  //       break;
  //     case 4:
  //       this.getBlockedClientsProfiles();
  //       break;
  //     case 5:
  //       this.getExpiredClientsProfiles()


  //   }
  // }
// details informatin
  objectProduct(object ?: any,id?:any) {

      this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('Product', test);
    sessionStorage.setItem('id', id);
    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    // console.log(this.productCurrent);
    this.id = sessionStorage.getItem('id');


  }
  objectProductGet() {

    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    // console.log(this.idProductSessionStorage);


  }
// change stutas client
changeToAccepted(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: "تم تاكيد المعلومات",
    accountStatusId:5
  }

  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
  })

}

changeToBlock(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: this.massage?.value,
    accountStatusId:1
  }
  
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
  })

}

changeToNotComplette(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description:this.massage?.value,
    accountStatusId:8
  }
  
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    this.show = true;
    this.messages = data.message;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  })

}
changeToNew(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: "",
    accountStatusId:4
  }
 
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
  })

}

  // downlod file


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


  // fortest(totals:any,arrays:any[]){
  //   for (var i  = 1; i <=totals; i++) {
  //     arrays.push(i)
  //     console.log(arrays.length)
  //   }
  // }

}