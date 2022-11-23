import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-menu-offers',
  templateUrl: './sp-menu-offers.component.html',
  styleUrls: ['./sp-menu-offers.component.scss']
})
export class SpMenuOffersComponent implements OnInit {

  projectstatues:any;
  type:number=Number(localStorage?.getItem('typeId'));
  offers:number=0;
  constructor(private api:ApiService) {

  }

  ngOnInit(): void {


    console.log(this.type);
    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getProjectServicesAndSubServiceAndStatues").subscribe(data=>{

      console.log(data);
      if(data.isError==false){
        this.offers=1;
      this.projectstatues=data.data.projectStatues;
      }
      

    })
  }

}

