import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { IadminSp } from './../../@models/iadmin-sp';
import { AdminServiceProvidorService } from './../../@core/services/admin/admin-service-providor.service';

@Component({
  selector: 'app-admin-sp',
  templateUrl: './admin-sp.component.html',
  styleUrls: ['./admin-sp.component.scss'],
})
export class AdminSPComponent implements OnInit {

  iProfileData: IadminSp[] = [];
  datas: any;
  companyName: string = '';
  idProduct: any;
  idProductSessionStorage: any;
  // objectpeo: any;
  productCurrent: any;
  name = '';
  id:any;
  // down
  base64Image: any;
  // pagenation
  page: number = 1;
  newApi: number = 1;
  total: number = 0;
  firstObject:any;

  constructor(
    private ServicesProvidor: AdminServiceProvidorService,
    private router: Router
  ) {
    // this.ServicesProvidor.getAllProfiles(this.page).subscribe((value) => {
    //   this.datas = value.data.profiles;
    //   this.iProfileData = this.datas;
    //   this.total = value.data.totalPages;
    // });
  }

  ngOnInit(): void {
    this.getNewProfiles()
    this.objectProductGet();
  }


  //6
  getExpiredProfiles() {
    this.newApi = 6;

    this.ServicesProvidor.getExpiredProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles;
      this.iProfileData = this.datas;
      console.log(this.iProfileData);
      this.total = value.data.totalPages;

    });
  }
  //5
  getBlockedProfiles() {
    this.newApi = 5;

    this.ServicesProvidor.getBlockedProfiles(this.page).subscribe((value) => {
      if (value.data.profiles) {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        console.log(this.iProfileData);
        this.total = value.data.totalPages;
        console.log(this.total);
      }
    });
  }
  // 1
  getNewProfiles() {
    this.newApi = 1;

    this.ServicesProvidor.getNewProfiles(this.page).subscribe((value) => {
      if (value.data.profiles) {
        this.datas = value.data.profiles;
        console.log(this.datas);
        this.iProfileData = this.datas;
      this.total = value.data.totalPages;
        this.firstObject=this.iProfileData[0]
        this.objectProduct(this.firstObject,this.firstObject.id)
      }
    });
  }
  //2
  getRejectedProfiles() {
    this.newApi = 2;

    this.ServicesProvidor.getRejectedProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles;
      console.log(this.datas);
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.total);


    });
  }
  //3
  getActiveAcconting() {
    this.newApi = 3;

    this.ServicesProvidor.getActiveProfiles(this.page).subscribe((value) => {
      if (value.data.profiles) {
        this.datas = value.data.profiles;
        console.log(this.datas);
        this.iProfileData = this.datas;
        console.log(this.iProfileData);
        this.total = value.data.totalPages;

      }
    });
  }
  //4
  getNonActiveAccount() {
    this.newApi = 4;

    this.ServicesProvidor.getNonActiveProfiles(this.page).subscribe((value) => {
      if (value.data.profiles) {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        console.log(this.iProfileData);
        this.total = value.data.totalPages;

      }
    });
  }

  choiseFunCallApiPagin(event: number) {
    this.page = event;
    switch (this.newApi) {
      case 1:
        this.getNewProfiles();
        break;
      case 2:
        this.getRejectedProfiles();
        break;
      case 3:
        this.getActiveAcconting();
        break;
      case 4:
        this.getNonActiveAccount();
        break;
      case 5:
        this.getBlockedProfiles();
        break;
      case 6:
        this.getExpiredProfiles();
        break;

    }
  }

  objectProduct(object: any,id:any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('Productsp', test);
    sessionStorage.setItem('ids', id);
    this.idProductSessionStorage = sessionStorage.getItem('Productsp');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
    this.id=sessionStorage.getItem('ids');
  }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
  }

  downloadImage(item: string) {
    // let imageUrl=this.productCurrent.companyRegisterationNumberPath
    let imageUrl = item;
    console.log(imageUrl);
    this.getBase64ImageFromURL(imageUrl).subscribe((base64data: any) => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // save image to disk
      var link = document.createElement('a');

      document.body.appendChild(link); // for Firefox

      link.setAttribute('href', this.base64Image);
      link.setAttribute('download', 'mrHankey.jpg');
      link.click();
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D | any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

}
