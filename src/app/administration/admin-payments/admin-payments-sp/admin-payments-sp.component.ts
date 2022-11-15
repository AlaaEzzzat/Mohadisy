import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-payments-sp',
  templateUrl: './admin-payments-sp.component.html',
  styleUrls: ['./admin-payments-sp.component.scss']
})
export class AdminPaymentsSpComponent implements OnInit {
  companyName: string = '';
  panelOpenState:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
