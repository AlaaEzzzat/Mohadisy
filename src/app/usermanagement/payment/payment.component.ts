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
 
  
}
