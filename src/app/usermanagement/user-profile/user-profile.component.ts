import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  editOverview :boolean =false;
  map:string ="https://www.google.com/maps/place/"
user:any={}
location:any = '';
showpopup:boolean =false

  constructor(private _HttpClient: HttpClient,    private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClientProfile().subscribe((data:any)=>{
    console.log(data.data)
    this.user = data.data;
    this.location =  this.user.district?.nameAr  + "+"+
     /* this.user.district?.city?.nameAr  + "+" */
     this.user.district?.city?.region?.nameAr 
    });
    
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
  
}
 