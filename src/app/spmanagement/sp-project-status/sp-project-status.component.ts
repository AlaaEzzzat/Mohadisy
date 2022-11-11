import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-project-status',
  templateUrl: './sp-project-status.component.html',
  styleUrls: ['./sp-project-status.component.scss']
})
export class SpProjectStatusComponent implements OnInit {

  CurrentProjects:Array<any>=[];
  FinishedProjects:Array<any>=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("https://app.mohandisy.com/api/Project/getOrganizationalSPCurrentProjects/Page/1").subscribe(data=>
    {
      this.CurrentProjects=data.data.projects;

    });

    this.api.get("https://app.mohandisy.com/api/Project/getOrganizationalSPFinishedProjects/Page/1").subscribe(data=>
    {
      this.FinishedProjects=data.data.projects;
      console.log(data);

    });

  }

}
