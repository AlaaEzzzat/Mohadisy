import { ClientService } from './../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  dataShow: any = [];
  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.getPaymentsForClient().subscribe((data) => {
      this.dataShow = data.data;
   
    });
  }
  notComplete=()=>{
    this.dataShow=[]
    this.clientService.getPaymentsForClient().subscribe((data) => {
      var result = data.data;
        result.map((project:any) => {
          if(project.paid ==0){
            this.dataShow.push(project);
          }
        })
    });
  }
 inComplete=()=>{
    this.dataShow=[]
    this.clientService.getPaymentsForClient().subscribe((data) => {
      var result = data.data;
        result.map((project:any) => {
          if(project.paid > 0 && project.paid < project.payments){
            this.dataShow.push(project);
          }
        })
    });
  }
  complete=()=>{
    this.dataShow=[]
    this.clientService.getPaymentsForClient().subscribe((data) => {
      var result = data.data;
        result.map((project:any) => {
          if(project.paid == project.payments){
            this.dataShow.push(project);
          }
        })
    });
  } 
  
}
