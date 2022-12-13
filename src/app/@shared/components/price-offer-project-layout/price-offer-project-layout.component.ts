import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-price-offer-project-layout',
  templateUrl: './price-offer-project-layout.component.html',
  styleUrls: ['./price-offer-project-layout.component.scss']
})
export class PriceOfferProjectLayoutComponent implements OnInit {
  @Input() isActive: boolean =false;
  @Input() selectedProject: any;
  @Input() activeProjectsComponents: any;
  @Input() activeProjectReqWorks: any;
  @Input() offersOfSelectedProject: any;
  @Input() showImg:any= (args: any) => {};
  @Input() download:any= (args: any) => {};

  @Input() userType:any=''
  constructor() { }

  ngOnInit(): void {
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }
}
