import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { Component,Renderer2, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  editOverview: boolean = false;
  map: string = 'https://www.google.com/maps/place/';
  selected: Date = new Date();
  user: any = {};
  location: any = '';
  showpopup: boolean = false;
  idPicChanged: boolean = false;
  idImgeUrl: any = '';
  userImg: any = '';
  userImgChanged: boolean = false;
  model:any ="";
  name:any='';
  phoneNumber:any = '';
  email:any =""
  imagesArray: any = [];
  editName:boolean =false;
  onBoldClick(){
    console.log(this.name);
    console.log(this.phoneNumber);
    console.log(this.email);

    }
    
  constructor(
    private renderer: Renderer2,
    private _HttpClient: HttpClient,
    private clientService: ClientService
  ) {}
  focusMyInput(id:any) {
    this.renderer.selectRootElement(id).focus();
  }
  ngOnInit(): void {
    this.clientService.getClientProfile().subscribe((data: any) => {
      console.log(data.data);
      this.user = data.data;
      this.name =this.user.firstName + " " + this.user.lastName;
      this.phoneNumber = this.user.applicationUser?.phoneNumber;
      this.email = this.user.applicationUser?.email;
      this.location =
        this.user.district?.nameAr +
        '+' +
        /* this.user.district?.city?.nameAr  + "+" */
        this.user.district?.city?.region?.nameAr;
    });
  }

  uplaodImg(e: any, name: any) {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (name == 'idPic') {
          this.idPicChanged = true;
          this.idImgeUrl = reader.result;
          //push {name : file} in array of images
          this.imagesArray.push({
            name: "idPic",
            file: file,
          })
        } else if (name == 'profileImage') {
          this.userImg = reader.result;
          //push {name : file} in array of images
          this.imagesArray.push({
            name: "profileImage",
            file: file,
          })
          this.userImgChanged = true;
        }
      };
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
  saveChanges(){
    let imageIdformData = new FormData();
    let imageprofileformData = new FormData();
    let idPic = "";
    let profileImage = '';
    if(this.imagesArray.length>0){
      this.imagesArray.map((img:any)=>{
        if(img['name'] == 'idPic'){
          idPic = img['file'];
          imageIdformData.append('idImage', idPic);
          this.clientService.storeClientIdFile(imageIdformData).subscribe({
            next: (response: any) => {
              console.log('Image Posted');
            },
            error: (err: any) => {
              console.log(err);
            },
          });
        }else if(img['name'] == 'profileImage'){
          profileImage = img['file'];
          imageprofileformData.append('profilePicture', profileImage);
          this.clientService.changeProfilePicture(imageprofileformData).subscribe({
            next: (response: any) => {
              console.log('Image Posted');
            },
            error: (err: any) => {
              console.log(err);
            },
          });
        }
      })

    }
    
    //send image to end point
    
    
//edited fields
this.user.applicationUser.phoneNumber = this.phoneNumber;
this.user.applicationUser.email = this.email;
var nameArr= this.name.split(" ");
this.user.firstName = nameArr[0];
nameArr.shift();
this.user.lastName = nameArr.join(" ");

   this.clientService.updateClientProfile(this.user).subscribe({
      next: (response: any) => {
        console.log('profile edited');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    
  }
}
