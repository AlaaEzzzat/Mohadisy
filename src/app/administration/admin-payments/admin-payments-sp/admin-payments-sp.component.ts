import { ClientService } from './../../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { AdminPaymentsService } from 'src/app/@core/services/admin/admin-payments.service';


@Component({
  selector: 'app-admin-payments-sp',
  templateUrl: './admin-payments-sp.component.html',
  styleUrls: ['./admin-payments-sp.component.scss']
})
export class AdminPaymentsSpComponent implements OnInit {

  dataShow:any=[]

  constructor(private paymentsService:AdminPaymentsService, private clientService: ClientService) { }
  ngOnInit(): void {
    this.paymentsService.getServiceProvidersPaymentsForAdmin().subscribe({
      next:((data)=>{
        this.dataShow=data.data
        this.dataShow.map((data:any)=>{
          if(data?.profile.offers?.length>0){
            this.getOfferSender(data?.profile.offers[0]);
          }
        })
        console.log(this.dataShow)
      })
    })
  }
  getOfferSender(project:any){
    if (project.individualServiceProviderProfileId) {
      this.clientService
        .getOfferSenderProfile(
          project.individualServiceProviderProfileId
        )
        .subscribe((data: any) => {
          project.offerSender = data.data;
        });
    } else {
      this.clientService
        .getOfferSenderProfile(
          project.organizationalServiceProviderProfileId
        )
        .subscribe((data: any) => {
          project.offerSender = data.data;
        });
    }
   
  } 
}
