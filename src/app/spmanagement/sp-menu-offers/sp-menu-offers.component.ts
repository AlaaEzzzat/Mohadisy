import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-menu-offers',
  templateUrl: './sp-menu-offers.component.html',
  styleUrls: ['./sp-menu-offers.component.scss']
})
export class SpMenuOffersComponent implements OnInit {

  projectstatues:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getProjectServicesAndSubServiceAndStatues").subscribe(data=>{
      this.projectstatues=data.data.projectStatues;

    })
  }

}

