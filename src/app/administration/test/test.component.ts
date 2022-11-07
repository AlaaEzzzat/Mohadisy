import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  iProfileData: IadminClients [] = [];
  idProduct: any;
  datas: any;
total:any;
arrayOfDigits:any []=[]
arrayOfDigits2:any []=[]
arrayOfDigits3:any []=[]
arrayOfDigits4:any []=[]
arrayOfDigits5:any []=[]
paginOne:boolean=false
paginTwo:boolean=false

page:any=1
flag:any=0
  constructor(  private ServicesProvidor: AdminClientsService) { }

  ngOnInit(): void {

    // this.pageid(this.pages)
    this.ServicesProvidor.getAllClientsProfiles(this.page).subscribe((data)=>{
      this.paginOne=true
      this.paginTwo=false
      this.datas = data.data.profiles
      this.iProfileData = this.datas;
      this.total = data.data.totalPages;
      console.log(this.iProfileData)
      this.fortest(this.total,this.arrayOfDigits)




    });

    this.ServicesProvidor.getActiveClientsProfiles(this.page).subscribe((data)=>{
      // this.paginTwo=true
      this.datas = data.data.profiles
      this.iProfileData = this.datas;
      this.total = data.data.totalPages;
      console.log(this.iProfileData)
      this.fortest(this.total,this.arrayOfDigits2)





    })

  }
  pageid(page:any){
    this.flag=1
    this.paginOne=true
    this.paginTwo=false
    this.ServicesProvidor.getAllClientsProfiles(page).subscribe((data)=>{

      this.datas = data.data.profiles
      this.iProfileData = this.datas;
      this.total = data.data.totalPages;
      console.log(this.iProfileData)
      sessionStorage.setItem('total', this.total)




    })
  }
  pageid2(page:any){
    this.flag=2
    this.paginTwo=true
    this.paginOne=false
    this.ServicesProvidor.getActiveClientsProfiles(page).subscribe((data)=>{

      this.datas = data.data.profiles
      this.iProfileData = this.datas;
      this.total = data.data.totalPages;
      console.log(this.iProfileData);
      sessionStorage.setItem('total', this.total)
      // this.fortest(this.total)

      // for (var i  = 1; i <=this.total; i++) {
      //   this.arrayOfDigits.push(i)
      //   console.log(this.arrayOfDigits.length)

      // }



    })
  }


// switchAll(page:any){
//   switch(this.flag){
//   case 1:{
//   this.pageid(page);
//   // this.fortest(sessionStorage.getItem('total'))

//   }
//   break;
//   case 2:
//     {
//       this.pageid2(page);
//       // this.fortest(sessionStorage.getItem('total'))

//       }

//   break;

//   }
// }


fortest(totals:any,arrays:any[]){
  for (var i  = 1; i <=totals; i++) {
    arrays.push(i)
    console.log(arrays.length)
  }
}

}

