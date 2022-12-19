import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-price-offer-card',
  templateUrl: './price-offer-card.component.html',
  styleUrls: ['./price-offer-card.component.scss']
})
export class PriceOfferCardComponent implements OnInit {
@Input() project: any;
@Input() showProject:any= (args: any) => {};
@Input() showOffers:any= (args: any) => {};
@Input() deleteProject:any= (args: any) => {};
@Input() isActive: boolean =false;
@Input() userType:any=''
  constructor() { }

  ngOnInit(): void {
  }

}
