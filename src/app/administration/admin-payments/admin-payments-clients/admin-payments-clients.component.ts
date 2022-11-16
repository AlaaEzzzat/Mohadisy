import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-payments-clients',
  templateUrl: './admin-payments-clients.component.html',
  styleUrls: ['./admin-payments-clients.component.scss']
})
export class AdminPaymentsClientsComponent implements OnInit {
  companyName: string = '';
  panelOpenState:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
