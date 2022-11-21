import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  editOverview: boolean = false;
  map: string = 'https://www.google.com/maps/place/';
  user: any = {};
  location: any = '';
  showpopup: boolean = false;
  idPicChanged: boolean = false;
  idImgeUrl: any = '';
  userImg: any = '';
  userImgChanged: boolean = false;

  constructor(
    private _HttpClient: HttpClient,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.getClientProfile().subscribe((data: any) => {
      console.log(data.data);
      this.user = data.data;
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
        } else if (name == 'profileImage') {
          this.userImg = reader.result;
          //push {name : file} in array of images
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
  saveChanges(){}
}
