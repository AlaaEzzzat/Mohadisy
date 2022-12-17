import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sp-payments',
  templateUrl: './sp-payments.component.html',
  styleUrls: ['./sp-payments.component.scss']
})
export class SpPaymentsComponent implements OnInit {
  dataShow: any = [];
  constructor(
    private serviceProviderService:ServiceProviderService
  ) {}
  ngOnInit(): void {
    this.serviceProviderService.getPaymentsForServiceProvider().subscribe((data) => {
      this.dataShow = data.data;
    });
  }
}
