import { ComplaintService } from './../../@core/services/complaint/complaint.service';
import { ChatService } from './../../@core/services/chat/chat.service';
import { IMessage } from './../../@models/message';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../@core/services/client/client.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  startChat: boolean = false;
  startComplaint: boolean = false;
  
  projectCategory: any = [
    { id: 1, name: 'مشاريع حالية' },
    { id: 2, name: 'مشاريع معلقه' },
    { id: 3, name: 'مشاريع منتهية' },
    { id: 4, name: 'مشاريع متأخرة' },
  ];

  activeCategory: any = 1;
  projectId: any = '';
  serviceId: any = '';
  message: IMessage = {} as IMessage;
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
    private clientService: ClientService,
    private chatService: ChatService,
    private router: Router,
    private complaintService: ComplaintService
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
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
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
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
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
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
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
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
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
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });

        break;
      default:
        console.log('nothing');
    }
  }
  showDetails(project: any) {
    console.log(project);
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
  next =()=> {
    if (this.page < this.totalpages) {
      this.page = this.page + 1;
      this.isActiveCategory(this.activeCategory);
    }
  }
  prev=()=> {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.isActiveCategory(this.activeCategory);
    }
  }
  ngOnInit(): void {
    this.clientService.getProjectServicesAndSubService().subscribe((data) => {
      this.projectServices = data.data.projectServices;
      console.log(this.projectServices);
      this.activeService = this.projectServices[0].id;
      console.log(this.activeService);
      this.isActiveService(this.activeService);
    });
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
    var Days = Time / (1000 * 3600 * 24); 
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
  showImg=(src: any)=> {
    console.log(src)
    this.showModal = true;
    this.modalSrc = src;
  }
  toggle = ()=> {
    this.showModal = !this.showModal;
  }
  fileMessage: any = '';
  onFileUpload(event: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.fileMessage = myfile;
      console.log(this.fileMessage);
      console.log(this.fileMessage.name);
    }
  }
  sendMessage(message: string, receiverId: string) {
    var type: number = 1;
    this.message.content = message;
    this.message.messageTypeId = type;
    this.message.receiverId = receiverId;
    this.sendMessageToEndPoint(this.message, receiverId);
    if (this.fileMessage) {
      type = 2;
      this.message.content = this.fileMessage;
      this.message.messageTypeId = type;
      this.message.receiverId = receiverId;
      this.sendMessageToEndPoint(this.fileMessage, receiverId);
    }
  }
  sendMessageToEndPoint(message: any, receiverId: any) {
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/usermanagement/chat']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  toggleStatus = () => {
    this.startChat = false;
    this.startComplaint = false;
  };
  startChatF= ()=>{
    this.startChat = true;
  }
  startComplaintF =()=>{
    this.startComplaint = true;
  }
}
