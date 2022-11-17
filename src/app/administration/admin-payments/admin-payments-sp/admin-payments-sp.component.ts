import { Component, OnInit } from '@angular/core';
import { AdminPaymentsService } from 'src/app/@core/services/admin/admin-payments.service';
import { IadminPaymentsSp } from 'src/app/@models/iadmin-payments';

@Component({
  selector: 'app-admin-payments-sp',
  templateUrl: './admin-payments-sp.component.html',
  styleUrls: ['./admin-payments-sp.component.scss']
})
export class AdminPaymentsSpComponent implements OnInit {
  companyName: string = '';
  panelOpenState:boolean = false;
  datas:any;
  spPayments:IadminPaymentsSp[]=[]
  idProduct:any
  platformProfit:any
  // nocomPay:boolean=false
  constructor(private paymentsService:AdminPaymentsService) { }

  ngOnInit(): void {
   this.getServiceProvidersPaymentsForAdmin()
  }
  getServiceProvidersPaymentsForAdmin(){

    this.paymentsService.getServiceProvidersPaymentsForAdmin().subscribe({
      next:((data)=>{
        this.datas=data.data
        this.spPayments=this.datas
        // console.log(this.spPayments)
        this.objectProduct(this.spPayments[0]) 
  
      })
    })
  }
  

  objectProduct(object: any) {
    this.idProduct = object
 

    for(let costs of this.idProduct.profile.offers){
      // console.log(  );
      this.platformProfit= Math.ceil(costs.totalCost - costs.cost)
    }
    
    // for(let costs of this.idProduct.profile.offers){
    //   // console.log( costs.milestones );
    // }
    
   
  }


  notComplete(){
    this.spPayments=[]
    this.paymentsService.getServiceProvidersPaymentsForAdmin().subscribe({
      next:((data)=>{
        for(let dddd of data.data){
       
        if( dddd.paid == 0){
        
          this.spPayments.push(dddd)
          console.log(this.spPayments)
        }
      }
       

      })
    })
  }
  inComplete(){
    this.spPayments=[]
    this.paymentsService.getServiceProvidersPaymentsForAdmin().subscribe({
      next:((data)=>{
        // console.log(data.data)
        for(let dddd of data.data){
       
        if(dddd.payments > dddd.paid && dddd.paid != 0){
          // this.datas+=dddd
          
          this.spPayments.push(dddd)
          console.log(this.spPayments)
          // this.objectProduct(this.spPayments[0]) 
        }
      }
       

      })
    })
  }
  complete(){
   
    this.spPayments=[]
    this.paymentsService.getServiceProvidersPaymentsForAdmin().subscribe({
      next:((data)=>{
        // console.log(data.data)
        for(let dddd of data.data){
       
        if(dddd.payments === dddd.paid && dddd.paid != 0){
          // this.datas+=dddd
       
          this.spPayments.push(dddd)
          console.log(this.spPayments)
          // this.objectProduct(this.spPayments[0]) 
        }
      }
       

      })
    })
  }
}
