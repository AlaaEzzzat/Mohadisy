import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { Observable, Observer, filter } from 'rxjs';


@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit, OnDestroy {
  page: number = 1;
  newApi: number = 1;
  total: number = 0;
  iProfileData: IadminClients [] = [];
  datas: any;
  idProduct: any;
  idProductSessionStorage: any;
  filterTerm!: string;
  productCurrent: any;
  // down
  base64Image: any;

  constructor( private ServicesProvidor:AdminClientsService) { }


  ngOnInit(): void {
    this.getNewClientProfiles();

    this.objectProductGet();

  }

  getNewClientProfiles(){
    this.newApi=1;
    this.ServicesProvidor.getNewClientsProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
    });
  }

  getActiveClientAcconting(){
    this.newApi=2
    this.ServicesProvidor.getActiveClientsProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
    });
  }

  getNonActiveClientAccount(){
    this.newApi=3
    this.ServicesProvidor.getNonActiveClientProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
    });
  }
  getBlockedClientsProfiles(){
    this.newApi=4
    this.ServicesProvidor.getBlockedClientsProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
    });
  }
  getExpiredClientsProfiles(){
    this.newApi=5
    this.ServicesProvidor.getExpiredClientsProfiles(this.page).subscribe((value) => {
      this.datas = value.data.profiles
      this.iProfileData = this.datas;
      this.total = value.data.totalPages;
      console.log(this.iProfileData)
    });
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
        this.getExpiredClientsProfiles()


    }
  }
// details informatin
  objectProduct(object: any) {
    this.idProduct = object;
    let test = JSON.stringify(this.idProduct);
    sessionStorage.setItem('Product', test);
    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
  }
  objectProductGet() {
    this.idProductSessionStorage = sessionStorage.getItem('Product');
    this.productCurrent = JSON.parse(this.idProductSessionStorage);
    console.log(this.productCurrent);
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


}
