import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { IadminSp } from './../../@models/iadmin-sp';
import { AdminServiceProvidorService } from './../../@core/services/admin/admin-service-providor.service';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Indivdual } from './../../@models/indivdual';
import { Organiztionl } from './../../@models/organiztionl';

@Component({
  selector: 'app-admin-sp',
  templateUrl: './admin-sp.component.html',
  styleUrls: ['./admin-sp.component.scss'],
})
export class AdminSPComponent implements OnInit {
  companys: IadminSp[] = [];
  mostaql: IadminSp[] = [];
  description:any;
  show: boolean = false;
  showDanger: boolean = false;
  messages: any;
  iProfileData: IadminSp[] = [];
  datas: any;
  companyName: string = '';
  idProduct: any;
  idProductSessionStorage: any;
  iChangeStatus: IChangeStatus | undefined = undefined;
  myTimeout: any;
  // objectpeo: any;
  // productCurrent: any;
  name = '';
  id: any;
  arrayOfDigits1: any[] = [];
  arrayOfDigits2: any[] = [];
  arrayOfDigits3: any[] = [];
  arrayOfDigits4: any[] = [];
  arrayOfDigits5: any[] = [];
  arrayOfDigits6: any[] = [];
  arrayOfDigitsNotCompletedProfiles: any[] = [];
  pagenationNewProfiles: boolean = false;
  pagenationRejectedProfiles: boolean = false;
  pagenationactiveAllAcconting: boolean = false;
  pagenationBlockedProfiles: boolean = false;
  pagenationNonActiveAccount: boolean = false;
  pagenationExpiredProfiles: boolean = false;
  pagenationNotCompletedProfiles: boolean = false;
  page: number = 1;
  newApi: number = 1;
  total: number = 0;
  firstObject: any;
  userformMassage :FormGroup;
  currentIndivdual: Indivdual= {} as Indivdual;
  currentOrganiztionl: Organiztionl= {} as Organiztionl;

productCurrent: any;
  constructor(private _HttpClient: HttpClient, private ServicesProvidor: AdminServiceProvidorService,private formbuilder:FormBuilder)
  {
    this.userformMassage=this.formbuilder.group({
      massage:['',[Validators.required]],
    });
    this.ServicesProvidor.getNewProfiles(this.page).subscribe((value) => {
      this.pagenationNewProfiles = true;
      this.pagenationRejectedProfiles = false;
      this.pagenationactiveAllAcconting = false;
      this.pagenationBlockedProfiles = false;
      this.pagenationNonActiveAccount = false;
      this.pagenationExpiredProfiles = false;
      this.pagenationNotCompletedProfiles= false;

      this.total = value.data.totalPages;
      this.fortest(this.total, this.arrayOfDigits1);
    });
    this.ServicesProvidor.getRejectedProfiles(this.page).subscribe((value) => {
      this.total = value.data.totalPages;

      this.fortest(this.total, this.arrayOfDigits2);
    });
    this.ServicesProvidor.activeProfile(this.page).subscribe((value) => {
      this.total = value.data.totalPages;

      this.fortest(this.total, this.arrayOfDigits3);
    });

    this.ServicesProvidor.getBlockedProfiles(this.page).subscribe((value) => {
      this.total = value.data.totalPages;
      // console.log(this.total);

      this.fortest(this.total, this.arrayOfDigits4);
    });
    this.ServicesProvidor.getNonActiveProfiles(this.page).subscribe((value) => {
      this.total = value.data.totalPages;

      this.fortest(this.total, this.arrayOfDigits5);
    });

    this.ServicesProvidor.getExpiredProfiles(this.page).subscribe((value) => {
      this.total = value.data.totalPages;

      this.fortest(this.total, this.arrayOfDigits6);
    });
    this.ServicesProvidor.getNotCompletedProfiles(this.page).subscribe((value) => {
      this.total = value.data.totalPages;

      this.fortest(this.total, this.arrayOfDigitsNotCompletedProfiles);
    });
  }

  ngOnInit(): void {
    this.getNewProfiles(this.page);
    this.objectProductGet();
  }
  get massage(){
    return this.userformMassage?.get('massage');
  }
  //6
  getExpiredProfiles(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = true;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 6;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getExpiredProfiles(page).subscribe((value) => {
      this.datas = value.data.profiles;
      this.iProfileData = this.datas;
      // console.log(this.iProfileData);
      this.total = value.data.totalPages;
      if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}

    });
  }
  getNotCompletedProfiles(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles = true;
    this.newApi = 8;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getNotCompletedProfiles(page).subscribe((value) => {
      this.datas = value.data.profiles;
      this.iProfileData = this.datas;
      // console.log(this.iProfileData);
      this.total = value.data.totalPages;
      if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}

    });
  }
  //5
  getBlockedProfiles(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = true;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 5;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getBlockedProfiles(page).subscribe((value) => {
      this.datas = value.data.profiles;
      this.iProfileData = this.datas;
      // console.log(this.iProfileData);
      this.total = value.data.totalPages;
      // console.log(this.datas.length!=0);
        if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}
    });
  }
  // 1
  getNewProfiles(page: any) {
    this.pagenationNewProfiles = true;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 1;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');

    this.ServicesProvidor.getNewProfiles(page).subscribe((value) => {
      if (value.data.profiles) {
        this.datas = value.data.profiles;
        // console.log(this.datas);
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        if(this.datas.length!=0){
          this.firstObject = this.iProfileData[0];
          this.objectProduct(this.firstObject, this.firstObject.id);}

      }
    });
  }
  //2
  getRejectedProfiles(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = true;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 2;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getRejectedProfiles(page).subscribe((value) => {
      this.datas = value.data.profiles;
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}
    });
  }
  //3
  activeAllAcconting(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = true;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = false;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 3;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.activeProfile(page).subscribe((value) => {
      this.datas = value.data.activeProfiles;
      // console.log(this.datas);
      this.iProfileData = this.datas;
      // console.log(this.iProfileData);
      this.total = value.data.totalPages;
      if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}
    });
  }
  //4
  getNonActiveAccount(page: any) {
    this.pagenationNewProfiles = false;
    this.pagenationRejectedProfiles = false;
    this.pagenationactiveAllAcconting = false;
    this.pagenationBlockedProfiles = false;
    this.pagenationNonActiveAccount = true;
    this.pagenationExpiredProfiles = false;
    this.pagenationNotCompletedProfiles= false;

    this.newApi = 4;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getNonActiveProfiles(page).subscribe((value) => {
      this.datas = value.data.nonActiveProfiles;
      this.iProfileData = this.datas;
      // console.log(this.iProfileData);
      this.total = value.data.totalPages;
      if(this.datas.length!=0){
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);}
    });
  }
  getNewProfilesCompany(page: any) {
    this.ServicesProvidor.activeProfile​(page).subscribe((value) => {
      let companys:any[]=[];
      let mostaql:any[]=[]
        this.datas = value.data.profiles;
        for(let x of this.datas){
            if(x.applicationUser.accountType.key  === "CO"){
             companys.push(x)
              console.log(companys)
            }else if(x.applicationUser.accountType.key  === "IND"){
              mostaql.push(x)
              console.log(mostaql)
            }


        }
        //  let coms =this.datas.filter((Company: any) => {Company.id  === 3101  } );
        // console.log(coms)

        // console.log( this.datas.filter((Company: any) => {Company.applicationUser.accountType.key  === "CO"  } ))


      }
    );
  }


  objectProduct(object: any, id: any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('Productsp', test);
    sessionStorage.setItem('ids', id);
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    this.id = sessionStorage.getItem('ids');
  }

  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
  }

  // change stutas client
  changeToAccepted() {

    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: '',
      accountStatusId: 5,
    };


    if (
      this.iChangeStatus.accountStatusId ===
      this.idProduct.joinRequestStatus.accountStatus.id
    ) {
      alert('العميل موجود بالفعل');
    } else if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        alert(`${data.message}`);
        // console.log(this.iChangeStatus!.profileId);
      });
    } else {
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        alert(`${data.message}`);
        // console.log(this.iChangeStatus!.profileId);
      });
    }
  }
  // changeToNotComplette

  changeToNotComplette(){
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: this.massage?.value,
      accountStatusId: 8,
      joinRequestStatuses:[this.massage?.value]

    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(this.iChangeStatus).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        // console.log(this.iChangeStatus);
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    }
    else{
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        // alert(`${data.message}`);
        // console.log(this.iChangeStatus!.profileId);
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }

  }

  changeToReject(){
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: this.massage?.value,
      accountStatusId:1,
      joinRequestStatuses:[this.massage?.value]

    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(this.iChangeStatus).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        // console.log(this.iChangeStatus);
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    }
    else{
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        // alert(`${data.message}`);
        // console.log(this.iChangeStatus!.profileId);
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }

  }

accepted(){
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: "تم تفعيل الحساب",
      accountStatusId:4,
      joinRequestStatuses:[" تم تفعيل الحساب"]

    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(this.iChangeStatus).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        // console.log(this.iChangeStatus);
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    }
    else{
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        // alert(`${data.message}`);
        // console.log(this.iChangeStatus!.profileId);
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }

  }
  updatapro(){
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);

    if (this.idProduct.applicationUser.accountType.key === 'CO'){
    this.ServicesProvidor.updateOrganizationalUpdateProfile(this.productCurrent).subscribe(da=>{

    });
  }
    else{
      this.ServicesProvidor.updateIndividualUpdateProfile(this.productCurrent).subscribe(da=>{

      });
    }
  }
  download(url: string, name: any) {
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
  }

  fortest(totals: any, arrays: any[]) {
    for (var i = 1; i <= totals; i++) {
      arrays.push(i);
    }
  }

  // downloadImage(item: string) {
  //   // let imageUrl=this.productCurrent.companyRegisterationNumberPath
  //   let imageUrl = item;
  //   console.log(imageUrl);
  //   this.getBase64ImageFromURL(imageUrl).subscribe((base64data: any) => {
  //     console.log(base64data);
  //     this.base64Image = 'data:image/jpg;base64,' + base64data;
  //     // save image to disk
  //     var link = document.createElement('a');

  //     document.body.appendChild(link); // for Firefox

  //     link.setAttribute('href', this.base64Image);
  //     link.setAttribute('download', 'mrHankey.jpg');
  //     link.click();
  //   });
  // }

  // getBase64ImageFromURL(url: string) {
  //   return Observable.create((observer: Observer<string>) => {
  //     const img: HTMLImageElement = new Image();
  //     img.crossOrigin = 'Anonymous';
  //     img.src = url;
  //     if (!img.complete) {
  //       img.onload = () => {
  //         observer.next(this.getBase64Image(img));
  //         observer.complete();
  //       };
  //       img.onerror = (err) => {
  //         observer.error(err);
  //       };
  //     } else {
  //       observer.next(this.getBase64Image(img));
  //       observer.complete();
  //     }
  //   });
  // }

  // getBase64Image(img: HTMLImageElement) {
  //   const canvas: HTMLCanvasElement = document.createElement('canvas');
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //   const ctx: CanvasRenderingContext2D | any = canvas.getContext('2d');
  //   ctx.drawImage(img, 0, 0);
  //   const dataURL: string = canvas.toDataURL('image/png');

  //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  // }
}
