import { Component, OnInit } from '@angular/core';
import { ProfileData } from './../../@models/profile-data';
import { Router } from '@angular/router';
import { Observable, Observer ,filter} from "rxjs";
import { IadminSp } from './../../@models/iadmin-sp';
import { AdminServiceProvidorService } from './../../@core/services/admin/admin-service-providor.service';
@Component({
  selector: 'app-admin-sp',
  templateUrl: './admin-sp.component.html',
  styleUrls: ['./admin-sp.component.scss']
})
export class AdminSPComponent implements OnInit {
  iProfileData:IadminSp[]=[];
  page:number=1;
  datas:any;
  companyName:string=""
  idProduct:any;
  idProductSessionStorage:any;
  objectpeo:any
  productCurrent:any;
  name = "";
  base64Image: any;
  constructor(private ServicesProvidor:AdminServiceProvidorService , private router:Router) { }

  ngOnInit(): void {

    this.ServicesProvidor.getAllProfiles(this.page).subscribe((value)=>{
      if(value.data.profiles){
        this.datas=value.data.profiles
        this.iProfileData=this.datas
        console.log(this.iProfileData);

      }

    });
        this.objectProductGet()

      }
      getClosedProfiles(){
        this.ServicesProvidor.getClosedProfiles(this.page).subscribe((value)=>{
          if(value.data.profiles){
            this.datas=value.data.profiles
            this.iProfileData=this.datas
            console.log(this.iProfileData);

          }

        });
      }
      getBlockedProfiles(){
        this.ServicesProvidor.getBlockedProfiles(this.page).subscribe((value)=>{
          if(value.data.profiles){
            this.datas=value.data.profiles
            this.iProfileData=this.datas
            console.log(this.iProfileData);

          }

        });
      }
      getNewProfiles(){
        this.ServicesProvidor.getNewProfiles(this.page).subscribe((value)=>{
          if(value.data.profiles){
            this.datas=value.data.profiles
            console.log(this.datas);
            this.iProfileData=this.datas
            console.log(this.iProfileData);

          }

        });
      }
      getRejectedProfiles(){
        this.ServicesProvidor.getRejectedProfiles(this.page).subscribe((value)=>{
          if(value.data.profiles){
            this.datas=value.data.profiles
            console.log(this.datas);
            this.iProfileData=this.datas
            console.log(this.iProfileData);

          }

        });
      }
      getActiveAcconting ​(){
      this.ServicesProvidor.getActiveProfiles​(this.page).subscribe((value)=>{
        if(value.data.profiles){
          this.datas=value.data.profiles
          console.log(this.datas);
          this.iProfileData=this.datas
          console.log(this.iProfileData);





        }

      });
    }
    getNonActiveAccount(){
      this.ServicesProvidor.getNonActiveProfiles​(this.page).subscribe((value)=>{
        if(value.data.profiles){
          this.datas=value.data.profiles
          this.iProfileData=this.datas
          console.log(this.iProfileData);

        }

      });
    }
    filter() {
      this.iProfileData = [...this.datas.filter((name:any) => {name.companyName.includes(this.companyName)})];
      console.log(this.iProfileData)
    }
    openProductDetails(id:any){
      this.idProduct=id
      console.log(this.idProduct);
      sessionStorage.setItem('idProduct',this.idProduct);
      this.idProductSessionStorage= sessionStorage.getItem('idProduct');
      console.log(this.idProductSessionStorage)

      // this.ServicesProvidor.getAllProfilesDetails(this.page,this.idProductSessionStorage).subscribe(value=>{
      //   this.datas=value.data.profiles
      //   this.iProfileData=this.datas
      //   console.log(this.iProfileData);
      //   for(let pro of this.iProfileData )
      //   if( pro.district.id === this.idProductSessionStorage){
      //   pro.district.id === this.idProductSessionStorage
      //   console.log(pro)
      // }

        // this.iProfileData.filter((c)=>{


        // })

      // })

      // .pipe(
      //   filter(id=>{
      //    console.log(id.data.profilesdistrict.projectServiceId)
      //    return id.data.profilesdistrict.projectServiceId===this.idProduct
      //   })
      //  )

    }
    objectProduct(id:any){
      this.idProduct=id
      let test=JSON.stringify(this.idProduct)
      sessionStorage.setItem('Product',test);
      this.idProductSessionStorage= sessionStorage.getItem('Product');
      this.productCurrent=JSON.parse(this.idProductSessionStorage)
      console.log(this.productCurrent)

    }
    objectProductGet(){
      this.idProductSessionStorage= sessionStorage.getItem('Product');
    this.productCurrent=JSON.parse(this.idProductSessionStorage)
    console.log(this.productCurrent)
    }

    downloadImage( item:string) {
      // let imageUrl=this.productCurrent.companyRegisterationNumberPath
        let imageUrl=item
      console.log(imageUrl)
      this.getBase64ImageFromURL(imageUrl).subscribe((base64data:any) => {
        console.log(base64data);
        this.base64Image = "data:image/jpg;base64," + base64data;
        // save image to disk
        var link = document.createElement("a");

        document.body.appendChild(link); // for Firefox

        link.setAttribute("href", this.base64Image);
        link.setAttribute("download", "mrHankey.jpg");
        link.click();
      });

    }


    getBase64ImageFromURL(url: string) {
      return Observable.create((observer: Observer<string>) => {
        const img: HTMLImageElement = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        if (!img.complete) {
          img.onload = () => {
            observer.next(this.getBase64Image(img));
            observer.complete();
          };
          img.onerror = err => {
            observer.error(err);
          };
        } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
        }
      });
    }

    getBase64Image(img: HTMLImageElement) {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx : CanvasRenderingContext2D|any = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL: string = canvas.toDataURL("image/png");

      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    }
