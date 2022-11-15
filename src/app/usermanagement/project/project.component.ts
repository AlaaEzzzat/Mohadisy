import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
params:any="";
  projectId:any='';
  serviceId:any="";
  project : any = {};
  projectsComponents:any = [];
  projectReqWorks:any = [];
  numOfMilestonesCompleted:number = 0;
  showModal:boolean = false;
  modalSrc:any=""
  constructor( private _HttpClient: HttpClient,private activatedRoute:ActivatedRoute, private clientService:ClientService) { }

  ngOnInit(): void {
this.activatedRoute.paramMap.subscribe((paramMap)=>{
  this.params = paramMap.get('id')?paramMap.get('id') : '';
  this.serviceId = this.params?.split("-")[0];
  this.projectId=this.params?.split("-")[1];
  console.log(this.serviceId)
  this.clientService.getProjectsByService(this.serviceId).subscribe((projects:any)=>{
    console.log(projects.data);
  

projects.data.map((project:any)=>{
  if(project.id == this.projectId){
    this.project = project;
    this.mapOnProjectsComponets(this.project.projectComponents
      );
      this.mapOnProjectsReuiredWorks(this.project.projectRequiredWorks);
    console.log(this.projectId);
    console.log(this.project);
  }
})
  })



})
  }
  mapOnProjectsReuiredWorks(ProjectsReuiredWorks: any) {
    this.projectReqWorks = [];
    ProjectsReuiredWorks.map((ProjectsReuiredWork: any) => {
      this.clientService
        .getRequiredWorkByWorkId(ProjectsReuiredWork.requiredWorkId)
        .subscribe((data) => {
          this.projectReqWorks.push(...data.data);
        });
    });
  }
  mapOnProjectsComponets(projectComponents: any) {
    this.projectsComponents = [];
    projectComponents.map((projectComponent: any) => {
      this.clientService
        .getProjectComponentById(projectComponent.componentId)
        .subscribe((data) => {
          this.projectsComponents.push(data.data);
        });
    });
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }
  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  showImg(src:any){
    this.showModal = true;
    this.modalSrc = src;
  }
}
