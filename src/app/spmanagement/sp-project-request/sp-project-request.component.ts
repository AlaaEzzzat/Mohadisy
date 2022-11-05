import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-project-request',
  templateUrl: './sp-project-request.component.html',
  styleUrls: ['./sp-project-request.component.scss']
})
export class SpProjectRequestComponent implements OnInit {

  Listprojects:Array<any>=[];
  select:any=0;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/1").subscribe(data=>{

    this.Listprojects=data.data.priceQuotes;


    });
  }

  showData(idProject:number)
  {
    this.select=idProject;

  }

}
