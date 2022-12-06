import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { IadminSp } from './../../@models/iadmin-sp';
import { AdminServiceProvidorService } from './../../@core/services/admin/admin-service-providor.service';
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
import { Indivdual } from './../../@models/indivdual';
import { Organiztionl } from './../../@models/organiztionl';
import { IND, OSP } from './../admin-sp-updata/admin-sp-updata.component';

@Component({
  selector: 'app-admin-sp',
  templateUrl: './admin-sp.component.html',
  styleUrls: ['./admin-sp.component.scss'],
})
export class AdminSPComponent implements OnInit {
  currentIndivdual: IND = {} as IND;
  currentOrganiztionl: OSP = {} as OSP;
  companys: IadminSp[] = [];
  mostaql: IadminSp[] = [];
  description: any;
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
  showInformation: boolean = false;
  showprojectDetails:boolean=false;
  projectDetails:any;
  name = '';
  id: any;
  page: number = 1;
  newApi: number = 1;
  total: any = 0;
  pagenation: any = [];
  firstObject: any;
  userformMassage: FormGroup;
  company: any = 'مستقل';
  productCurrent: any;
  isProcessing: boolean = true;
  filePath:any;
  objFilePath:any[]=[]
  constructor(
    private router: Router,
    private _HttpClient: HttpClient,
    private ServicesProvidor: AdminServiceProvidorService,
    private formbuilder: FormBuilder
  ) {
    this.userformMassage = this.formbuilder.group({
      massage: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getNewProfiles(this.page);
    this.objectProductGet();
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next=()=> {
    if (this.page < this.total) {
      this.page = this.page + 1;
      this.choise()
    }
  }
  prev= ()=> {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.choise()
    }
  }
  choise() {
    switch (this.newApi) {
      case 4:
        this.getNonActiveAccount(this.page);
        break;
      case 2:
        this.getRejectedProfiles(this.page);
        break;
      case 1:
        this.getNewProfiles(this.page);
        break;
      case 5:
        this.getBlockedProfiles(this.page);
        break;
      case 3:
        this.activeAllAcconting(this.page);
        break;
      case 6:
        this.getExpiredProfiles(this.page);
        break;
      case 8:
        this.getNotCompletedProfiles(this.page);
        break;
      case 18:
        this.getCompletedProfiles(this.page);
        break;
    }
  }
  get massage() {
    return this.userformMassage?.get('massage');
  }
  //6
  getExpiredProfiles(page: any) {
    this.newApi = 6;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getExpiredProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.isProcessing = true;
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;
          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  getNotCompletedProfiles(page: any) {
    this.isProcessing = true;
    this.newApi = 8;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getNotCompletedProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;
          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  getCompletedProfiles(page: any) {
    this.isProcessing = true;
    this.newApi = 18;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getCompletedProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  //5
  getBlockedProfiles(page: any) {
    this.isProcessing = true;
    this.newApi = 5;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getBlockedProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  // 1
  getNewProfiles(page: any) {
    this.isProcessing = true;
    this.newApi = 1;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');

    this.ServicesProvidor.getNewProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  //2
  getRejectedProfiles(page: any) {
    this.isProcessing = true;
    this.newApi = 2;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getRejectedProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.profiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  //3
  activeAllAcconting(page: any) {
    this.isProcessing = true;
    this.newApi = 3;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.activeProfile(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.activeProfiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }
  //4
  getNonActiveAccount(page: any) {
    this.isProcessing = true;
    this.newApi = 4;
    sessionStorage.removeItem('ids');
    sessionStorage.removeItem('Productsp');
    this.ServicesProvidor.getNonActiveProfiles(page).subscribe({
      next: (value) => {
        if (value != null && value != undefined && value.data.totalPages != 0) {
          this.datas = value.data.nonActiveProfiles;
          this.iProfileData = this.datas;
          this.total = value.data.totalPages;

          this.counter(this.total);
          if (this.datas.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        } else {
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.isProcessing = false;
      },
    });
  }

  // test
  getNewProfilesCompany(page: any) {
    this.iProfileData = [];
    this.ServicesProvidor.getNewProfiles(page).subscribe({
      next: (value) => {
        // iProfileData
        if (value != null && value != undefined && value.data.totalPages != 0) {
          for (let data of value.data.profiles) {
            if (data.applicationUser.accountType.key === 'CO') {
              this.iProfileData.push(data);
              
            }
            this.total = value.data.totalPages;
            console.log(this.iProfileData);
          }
          if (this.iProfileData.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        }
      },
    });
  }
  getNewProfilesMostaql(page: any) {
    this.iProfileData = [];
    this.ServicesProvidor.getNewProfiles(page).subscribe({
      next: (value) => {
        // iProfileData
        if (value != null && value != undefined && value.data.totalPages != 0) {
          for (let data of value.data.profiles) {
            if (data.applicationUser.accountType.key === 'IND') {
              this.iProfileData.push(data);
            
            }
            this.total = value.data.totalPages;
            // console.log(this.iProfileData);
          }
          if (this.iProfileData.length != 0) {
            this.firstObject = this.iProfileData[0];
            this.objectProduct(this.firstObject, this.firstObject.id);
          }
        }
      },
    });
  }

  objectProduct(object: any, id: any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('Productsp', test);
    sessionStorage.setItem('ids', id);
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    this.id = sessionStorage.getItem('ids');
    this.showInformation = true;
    this.showprojectDetails=false

  }

  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
  }

  showProjects(){
    this.showInformation=false;
    this.showprojectDetails=false
    for(let item of this.productCurrent?.serviceProviderWorks){
      // console.log(item.id)
      this.getServiceProviderWorkFiles(item.id)
    }

  }
  showProjectDetails(obj:any){
   
    this.showprojectDetails=true
    this.projectDetails=obj
    console.log(this.projectDetails)
    // let set =new Set( this.projectDetails)
    // console.log(set)

  }
  getServiceProviderWorkFiles(id:any){
    this.objFilePath=[]
    this.ServicesProvidor.getServiceProviderWorkFilesByWorkId(id).subscribe({next:(data)=>{
      
      this.objFilePath.push(data.data)
      console.log(this.objFilePath)
    //    let set =new Set( this.objFilePath)
    // console.log(set)
      // for(let file of data.data){
      //   console.log()
      //   this.filePath=file.filePath
      // }
    }})
  }
  back(){
    this.showInformation=true;
    this.showprojectDetails=false
  }
  backTwo(){
    this.showprojectDetails=false
  }
  // change stutas client
  changeToAccepted() {
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: '',
      accountStatusId: 5,
    };

    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    } else {
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    }
  }
  // changeToNotComplette

  changeToNotComplette() {
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: this.massage?.value,
      accountStatusId: 8,
      joinRequestStatuses: [this.massage?.value],
    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    } else {
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }
  }

  changeToReject() {
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: this.massage?.value,
      accountStatusId: 1,
      joinRequestStatuses: [this.massage?.value],
    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    } else {
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }
  }

  accepted() {
    this.iChangeStatus = {
      profileId: this.idProduct.id,
      description: 'تم تفعيل الحساب',
      accountStatusId: 4,
      joinRequestStatuses: [' تم تفعيل الحساب'],
    };
    if (this.idProduct.applicationUser.accountType.key === 'CO') {
      this.ServicesProvidor.changeOrganizationalStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    } else {
      this.ServicesProvidor.changeIndividualStatus(
        this.iChangeStatus
      ).subscribe((data) => {
        this.show = true;
        this.messages = data.message;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      });
    }
  }
  updatapro(obj: any) {
    this.router.navigate(['./Admin/updata', obj]);
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

  // fortest(totals: any, arrays: any[]) {
  //   for (var i = 1; i <= totals; i++) {
  //     arrays.push(i);
  //   }
  // }

  calculateDiff(sentOn: any) {
    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
}
