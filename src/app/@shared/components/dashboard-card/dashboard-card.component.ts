import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input() data:any={};
  @Input() type = "";
  @Input() circleColor:string="";
  @Input() grid:any=""
  constructor() { }

  ngOnInit(): void {
  }

}
