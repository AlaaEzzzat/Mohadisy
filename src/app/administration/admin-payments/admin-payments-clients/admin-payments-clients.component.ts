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
        console.log(this.dataShow)
      })
    })
  }
}
