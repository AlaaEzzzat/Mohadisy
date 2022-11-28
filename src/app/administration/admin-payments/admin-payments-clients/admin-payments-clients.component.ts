import { Component, OnInit } from '@angular/core';
import { AdminPaymentsService } from 'src/app/@core/services/admin/admin-payments.service';
import { IadminPaymentsCients } from 'src/app/@models/iadmin-payments';


@Component({
  selector: 'app-admin-payments-clients',
  templateUrl: './admin-payments-clients.component.html',
  styleUrls: ['./admin-payments-clients.component.scss']
})
export class AdminPaymentsClientsComponent implements OnInit {
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
        this.clientsPayments=this.datas
        console.log(this.clientsPayments);
        
        this.objectProduct(this.clientsPayments[0]) 
      })
    })
  }

  objectProduct(object: any) {
    this.idProduct = object
     console.log( this.idProduct .projects );
    for(let costs of this.idProduct.profile.projects){
      this.productCurrent =  costs.offers
      for(let co of this.productCurrent){
      this.platformProfit= Math.ceil(co.totalCost - co.cost)
      // for(let price of co.milestones){
      //      console.log( );
      //      this.pricePro=price.cost


      // }

    }
    
    }
  }

  notComplete(){
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        for(let dddd of data.data){
       
        if( dddd.paid == 0){
        
          this.clientsPayments.push(dddd)
          console.log(this.clientsPayments)
        }
      }
       

      })
    })
  }
  inComplete(){
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        console.log(data.data)
        for(let client of data.data){
       
        if(client.payments > client.paid && client.paid != 0){
          // this.datas+=dddd
          
          this.clientsPayments.push(client)
          console.log(this.clientsPayments)
        }
      }         

       

      })
    })
  }
  complete(){
   
    this.clientsPayments=[]
    this.paymentsService.getClientsPaymentsForAdmin().subscribe({
      next:((data)=>{
        // console.log(data.data)
        for(let dddd of data.data){
       
        if(dddd.payments === dddd.paid && dddd.paid != 0){
          // this.datas+=dddd
       
          this.clientsPayments.push(dddd)
          console.log(this.clientsPayments)
          // this.objectProduct(this.clientsPayments[0]) 
        }
      }
       

      })
    })
  }

}
