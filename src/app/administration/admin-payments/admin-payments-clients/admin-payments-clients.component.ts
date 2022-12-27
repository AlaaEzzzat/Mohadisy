import { Component, OnInit } from '@angular/core';
import { AdminPaymentsService } from 'src/app/@core/services/admin/admin-payments.service';
import { IadminPaymentsCients } from 'src/app/@models/iadmin-payments';


@Component({
  selector: 'app-admin-payments-clients',
  templateUrl: './admin-payments-clients.component.html',
  styleUrls: ['./admin-payments-clients.component.scss']
})
export class AdminPaymentsClientsComponent implements OnInit {
  dataShow:any=[];
  companyName: string = '';
  panelOpenState:boolean = false;
  datas:any;
  clientsPayments:IadminPaymentsCients[]=[]
  clientsPaymentProject:IadminPaymentsCients[]=[]
  tast:any;
  idProduct:any
  idProductSessionStorage: any;
  productCurrent:any
  id: any;
  platformProfit:any
  pricePro:any;
  constructor(private paymentsService:AdminPaymentsService ){ }

  ngOnInit(): void {
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        this.datas=data.data
        this.dataShow =data.data
      })
    })
  }


  
  notComplete=()=>{
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        for(let dddd of data.data){ 
        if( dddd.paid == 0){  
          this.clientsPayments.push(dddd)
        }
      } this.dataShow =this.clientsPayments
      })
    })
  }
  inComplete=()=>{
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        for(let client of data.data){
        if(client.payments > client.paid && client.paid != 0){
            this.clientsPayments.push(client)
        }
      }this.dataShow =this.clientsPayments         

       

      })
    })
  }
  complete=()=>{
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        for(let dddd of data.data){
        if(dddd.payments === dddd.paid && dddd.paid != 0){
          this.clientsPayments.push(dddd)
        }
      }this.dataShow =this.clientsPayments
      })
    })
  }
}
