import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-layout-project',
  templateUrl: './layout-project.component.html',
  styleUrls: ['./layout-project.component.scss']
})
export class LayoutProjectComponent implements OnInit {

  projectstatues:any;
  service:any=0;
  type:number=Number(localStorage.getItem('typeId'));
  constructor(private api:ApiService) { }

  ngOnInit(): void {


    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getProjectServicesAndSubServiceAndStatues").subscribe(data=>{
      this.projectstatues=data.data.projectStatues;

    });

    this.api.get("https://app.mohandisy.com/api/Project/GetProjectServicesWithCountForSP/Page/1").subscribe(data=>{
      this.service=data.data;

    });

  }

}
