import { ClientService } from './../../@core/services/client/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import moment from "moment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  allPaidProjectArray:any = [];
  dataShow:any = [];
  showModal:boolean =false;
  location:any="";
  activeProject:any={}
  requiredWorks:any= [];
  activeworksName:any =[]
  constructor(
    private router: Router,
    private _toastr: ToastrService,
    private clientService: ClientService
  ) {
   
  }
 showDetails(project:any){
  this.showModal =true;
  this.activeProject = project;
  project.project.offers[0].milestones.map((mile:any)=>{
    if(mile.requiredWorkId){
      this.getrequireWork(mile.requiredWorkId);
    }
  })
 }
 search(word:any){
  console.log(word)
  this.dataShow = [];
  this.allPaidProjectArray.map((project:any)=>{
if(project.project.name.search(new RegExp(word, "i")) != -1){
this.dataShow.push(project);
}
  })
 }
 getLocation(districtId:any){

 }
 sortByName(){
  this.dataShow.sort((a:any, b:any) => a.project.name.localeCompare(b.project.name));
 }
 sortByDate(){
  this.dataShow.map((pro:any)=>{
    pro.project.dateCreated = new Date(pro.project.dateCreated)
  }
  );
  this.dataShow.sort((a:any,b:any)=>{
    return b.project.dateCreated- a.project.dateCreated;
  });
 }
getrequireWork(reqId:any){
   this.clientService.getRequiredWorkByWorkId(reqId).subscribe((data:any)=>{
    this.requiredWorks.push(...data.data);
  })
}
getrequireWorkName(requiredWorkId:any){
  var mywork = {};
  this.requiredWorks.map((work:any)=>{
    console.log(work)
    console.log(work.name)
   if( work.id == requiredWorkId){
    mywork=work;
    return work?.name;
   }
  });
}
  ngOnInit(): void {
    this.clientService.getPaymentsForClient().subscribe((data) => {
      this.allPaidProjectArray = data.data;
      this.dataShow = this.allPaidProjectArray;
      console.log(this.allPaidProjectArray)
    });
  }
  getDate(date:any){
   return moment(date).utc().format('YYYY-MM-DD')
  }
}
