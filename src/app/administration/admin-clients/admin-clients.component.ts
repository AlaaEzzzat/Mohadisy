import { Component, OnInit  } from '@angular/core';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { Observable, Observer } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {
  page: number = 1;
  newApi: number = 3;
  total: number = 0;
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

  arrayNewProfiles:any []=[]
  arrayBlockedClientsProfiles:any []=[]
  arrayOfDigitsActiveClientAcconting:any []=[]
  arrayOfDigitsNonActiveClientAccount:any []=[]
  arrayOfDigitsExpiredClientsProfiles:any []=[]

  pagenationNewProfiles:boolean=false
  pagenationActiveClientAcconting:boolean=false
  pagenationNonActiveClientAccount:boolean=false
  pagenationBlockedClientsProfiles:boolean=false
  pagenationExpiredClientsProfiles:boolean=false
  arrayOfDigits:any []=[]
  constructor( private ServicesProvidor:AdminClientsService ,private _HttpClient:HttpClient) {

    this.ServicesProvidor.getNewClientsProfiles(this.page).subscribe((value) => {
      this.pagenationNewProfiles=true
      this. pagenationActiveClientAcconting=false
      this. pagenationNonActiveClientAccount=false
      this. pagenationBlockedClientsProfiles=false
      this. pagenationExpiredClientsProfiles=false

      this.total = value.data.totalPages;

      this.fortest(this.total,this.arrayNewProfiles)


    });
    this.ServicesProvidor.getActiveClientsProfiles(this.page).subscribe((value) => {

      this.total = value.data.totalPages;

      this.fortest(this.total,this.arrayOfDigitsActiveClientAcconting)

    });
    this.ServicesProvidor.getNonActiveClientProfiles(this.page).subscribe((value) => {

      this.total = value.data.totalPages;

      this.fortest(this.total,this.arrayOfDigitsNonActiveClientAccount)

    });
    this.ServicesProvidor.getBlockedClientsProfiles(this.page).subscribe((value) => {

      this.total = value.data.totalPages;

      this.objectProduct(this.firstObject,this.firstObject.id)
      this.fortest(this.total,this.arrayBlockedClientsProfiles)

    });
    this.ServicesProvidor.getExpiredClientsProfiles(this.page).subscribe((value) => {

      this.total = value.data.totalPages;

      this.fortest(this.total,this.arrayOfDigitsExpiredClientsProfiles)

    });
  }


  ngOnInit(): void {
    this.getNewClientProfiles(this.page)

    this.objectProductGet();
  }



  getNewClientProfiles(page:any){
    this.newApi=1;
    this.pagenationNewProfiles=true
    this. pagenationActiveClientAcconting=false
    this. pagenationNonActiveClientAccount=false
    this. pagenationBlockedClientsProfiles=false
    this. pagenationExpiredClientsProfiles=false
    this.ServicesProvidor.getNewClientsProfiles(page).subscribe((value) => {

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id)


    });

  }

  getActiveClientAcconting(page:any){
    this.newApi=2
    this.pagenationNewProfiles=false
    this. pagenationActiveClientAcconting=true
    this. pagenationNonActiveClientAccount=false
    this. pagenationBlockedClientsProfiles=false
    this. pagenationExpiredClientsProfiles=false
    this.ServicesProvidor.getActiveClientsProfiles(page).subscribe((value) => {

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id)
    });
  }

  getNonActiveClientAccount(page:any){
    this.newApi=3
    this.pagenationNewProfiles=false
      this. pagenationActiveClientAcconting=false
      this. pagenationNonActiveClientAccount=true
      this. pagenationBlockedClientsProfiles=false
      this. pagenationExpiredClientsProfiles=false
    this.ServicesProvidor.getNonActiveClientProfiles(page).subscribe((value) => {

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id);

    });

  }
  getBlockedClientsProfiles(page:any){
    this.newApi=4
    this.pagenationNewProfiles=false
    this. pagenationActiveClientAcconting=false
    this. pagenationNonActiveClientAccount=false
    this. pagenationBlockedClientsProfiles=true
    this. pagenationExpiredClientsProfiles=false
    this.ServicesProvidor.getBlockedClientsProfiles(page).subscribe((value) => {

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.datas)
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id)
    });
  }
  getExpiredClientsProfiles(page:any){
    this.newApi=5
    this.pagenationNewProfiles=false
    this. pagenationActiveClientAcconting=false
    this. pagenationNonActiveClientAccount=false
    this. pagenationBlockedClientsProfiles=false
    this. pagenationExpiredClientsProfiles=true
    this.ServicesProvidor.getExpiredClientsProfiles(page).subscribe((value) => {

      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
      this.firstObject=this.iProfileData[0]
      this.objectProduct(this.firstObject,this.firstObject.id)
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
    console.log(this.productCurrent);
    this.id = sessionStorage.getItem('id');


  }
  objectProductGet() {

    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.idProductSessionStorage);


  }
// change stutas client
changeToAccepted(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: "",
    accountStatusId:5
  }
  if(this.iChangeStatusCliend.accountStatusId===this.idProduct.joinRequestStatus.accountStatus.id){
    alert("العميل موجود بالفعل")
  }else{
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    alert(`${data.message}`);
    console.log(this.iChangeStatusCliend!.profileId)
  })
}
}

changeToReject(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: "",
    accountStatusId:6
  }
  if(this.iChangeStatusCliend.accountStatusId===this.idProduct.joinRequestStatus.accountStatus.id){
    alert("العميل موجود بالفعل")
  }else{
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    alert(`${data.message}`);
    console.log(this.iChangeStatusCliend!.profileId)
  })
}
}

changeToNotComplette(){
  this.iChangeStatusCliend={
    profileId:this.idProduct.id,
    description: "",
    accountStatusId:8
  }
  if(this.iChangeStatusCliend.accountStatusId===this.idProduct.joinRequestStatus.accountStatus.id){
    alert("العميل موجود بالفعل")
  }else{
  this.ServicesProvidor.changeProfileStatus(this.iChangeStatusCliend).subscribe((data)=>{
    alert(`${data.message}`);
    console.log(this.iChangeStatusCliend!.profileId)
  })
}
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

  fortest(totals:any,arrays:any[]){
    for (var i  = 1; i <=totals; i++) {
      arrays.push(i)
      console.log(arrays.length)
    }
  }

}

