import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  params: any = '';
  activeService: any = 1;
  activeProject: any = 1;
  projectServices: any = [];
  projectServiesArray: any = [];
  numOfCompltedMilesones: any = 0;
  projectCategory: any = [
    { id: 1, name: 'مشاريع حالية' },
    { id: 2, name: 'مشاريع معلقه' },
    { id: 3, name: 'مشاريع منتهية' },
    { id: 4, name: 'مشاريع متأخرة' },
    
  ];

  activeCategory: any = 1;
  projectId: any = '';
  serviceId: any = '';
  project: any = {};
  projectsComponents: any = [];
  projectReqWorks: any = [];
  numOfMilestonesCompleted: number = 0;
  showModal: boolean = false;
  modalSrc: any = '';
  projectMilestnes: any = [];
  page: number = 1;
  totalpages: any = 0;
  pagenation: any = [];
  offerSender: any = {};
  constructor(
    private _HttpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService
  ) {}
  isActiveService(id: any) {
    this.activeService = id;
    this.isActiveCategory(this.activeCategory);
  }
  isActiveCategory(id: any) {
    this.activeCategory = id;
    this.projectServiesArray = [];
    switch (id) {
      case 1:
        this.clientService
          .getClientCurrentProjects(this.page)
          .subscribe((data) => {
            console.log(data)
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            console.log(this.projectServiesArray)
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0? this.showDetails(this.projectServiesArray[0]) : '';

          });

        break;
      case 2:
        this.clientService
          .getClientPendingProjects(this.page)
          .subscribe((data) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0? this.showDetails(this.projectServiesArray[0]) : '';

          });

        break;
      case 3:
        this.clientService
          .getClientFinishedProjects(this.page)
          .subscribe((data) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0? this.showDetails(this.projectServiesArray[0]) : '';

          });

        break;
      case 4:
        this.clientService
          .getClientLateProjects(this.page)
          .subscribe((data) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0? this.showDetails(this.projectServiesArray[0]) : '';
          });

        break;
      case 5:
        this.clientService
          .getClientStoppedProjects(this.page)
          .subscribe((data) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0? this.showDetails(this.projectServiesArray[0]) : '';

          });

        break;
      default:
        console.log('nothing');
    }
  }
  showDetails(project: any) {
    console.log(project)
    this.project = project;
    this.activeProject = project.id;
    if (project.offers.length > 0) {
      this.clientService
        .getMilestonesByOfferId(project.offers[0]?.id)
        .subscribe((milestones: any) => {
          this.projectMilestnes = milestones.data;
          console.log(this.projectMilestnes);
          this.projectMilestnes.map((mile: any) => {
            if (mile.isPaid) {
              this.numOfCompltedMilesones++;
            }
          });
          console.log(this.numOfCompltedMilesones);
        });
      if (project.offers[0]?.individualServiceProviderProfileId) {
        this.clientService
          .getOfferSenderProfile(
            project.offers[0]?.individualServiceProviderProfileId
          )
          .subscribe((data: any) => {
            this.offerSender = data.data;
            console.log(this.offerSender);
          });
      } else {
        this.clientService
          .getOfferSenderProfile(
            project.offers[0]?.organizationalServiceProviderProfileId
          )
          .subscribe((data: any) => {
            this.offerSender = data.data;
            console.log(this.offerSender);
          });
      }
    }
    if (project.projectRequiredWorks.length > 0) {
      this.mapOnProjectsReuiredWorks(project.projectRequiredWorks);
    }
    if (project.projectComponents.length > 0) {
      this.mapOnProjectsComponets(project.projectComponents);
    }
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
  next() {
    if (this.page < this.totalpages) {
      this.page = this.page + 1;
      this.isActiveCategory(this.activeCategory);
    }
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.isActiveCategory(this.activeCategory);
    }
  }
  ngOnInit(): void {
    this.clientService.getProjectServicesAndSubService().subscribe((data) => {
      this.projectServices = data.data.projectServices;
      console.log(this.projectServices)
      this.activeService = this.projectServices[0].id;
      console.log(this.activeService)
      this.isActiveService(this.activeService);
    });

    /* this.activatedRoute.paramMap.subscribe((paramMap)=>{
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



}) */
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
  showImg(src: any) {
    this.showModal = true;
    this.modalSrc = src;
  }
}
