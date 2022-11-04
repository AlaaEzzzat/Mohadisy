import { Component, OnInit } from '@angular/core';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { Observable, Observer, filter, first } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss'],
})
export class AdminClientsComponent implements OnInit {
  page: number = 1;
  newApi: number = 3;
  total: number = 0;
  iProfileData: IadminClients[] = [];
  datas: any;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm: string = '';
  productCurrent: any;
  id: any;
  // down
  base64Image: any;
  sortedData: IadminClients[] = [];
  firstObject: any;
  constructor(private ServicesProvidor: AdminClientsService) {
    this.iProfileData.slice();
    this.getNewClientProfiles();
  }

  ngOnInit(): void {
    this.objectProductGet();
  }

  getNewClientProfiles() {
    this.newApi = 1;
    this.ServicesProvidor.getNewClientsProfiles(this.page).subscribe(
      (value) => {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getActiveClientAcconting() {
    this.newApi = 2;
    this.ServicesProvidor.getActiveClientsProfiles(this.page).subscribe(
      (value) => {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iProfileData);
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }

  getNonActiveClientAccount() {
    this.newApi = 3;
    this.ServicesProvidor.getNonActiveClientProfiles(this.page).subscribe(
      (value) => {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iProfileData);
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }
  getBlockedClientsProfiles() {
    this.newApi = 4;
    this.ServicesProvidor.getBlockedClientsProfiles(this.page).subscribe(
      (value) => {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iProfileData);
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }
  getExpiredClientsProfiles() {
    this.newApi = 5;
    this.ServicesProvidor.getExpiredClientsProfiles(this.page).subscribe(
      (value) => {
        this.datas = value.data.profiles;
        this.iProfileData = this.datas;
        this.total = value.data.totalPages;
        console.log(this.iProfileData);
        this.firstObject = this.iProfileData[0];
        this.objectProduct(this.firstObject, this.firstObject.id);
      }
    );
  }
  // bagenations
  choiseFunCallApiPagin(event: number) {
    this.page = event;
    switch (this.newApi) {
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
    }
  }
  // details informatin
  objectProduct(object?: any, id?: any) {
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

  // downlod file

  downloadImage(item: string) {
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
  sortData(sort: Sort) {
    const data = this.iProfileData.slice();
    if (!sort.active || sort.direction === '') {
      this.iProfileData = data;
      return;
    }

    this.iProfileData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fristName':
          return this.compare(a.name, b.name, isAsc);
        case 'dateCreated':
          return this.compare(a.name, b.name, isAsc);

        default:
          return 0;
      }
    });
  }

  // sortorder(){
  //   // this.iProfileData.sort(
  //   //   (n1,n2)=>{
  //   //      if (n1.dateCreated>n2.dateCreated) return 1;
  //   //      if (n1.dateCreated<n2.dateCreated) return -1;
  //   //      else return 0;
  //   //  })

  //   this.iProfileData.sort(function(a, b) {
  //     var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
  //     var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }

  //     // names must be equal
  //     return 0;
  //   });
  // }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
