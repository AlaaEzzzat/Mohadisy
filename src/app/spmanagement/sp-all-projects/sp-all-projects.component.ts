import { ApiService } from 'src/app/@core/api.service';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { ComplaintService } from 'src/app/@core/services/complaint/complaint.service';
import { ChatService } from 'src/app/@core/services/chat/chat.service';
import { ClientService } from './../../@core/services/client/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMessage } from 'src/app/@models/message';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sp-all-projects',
  templateUrl: './sp-all-projects.component.html',
  styleUrls: ['./sp-all-projects.component.scss']
})
export class SpAllProjectsComponent implements OnInit {
  params: any = '';
  spType: any =localStorage.getItem('type')?.replace(/"/g, '');
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
    { id: 5, name: 'مشاريع متوقفه' },
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
    private clientService: ClientService,
    private provider:ServiceProviderService,
    private chatService: ChatService,
    private router: Router,
    private api: ApiService,
  ) {}
  ngOnInit(): void {
    this.clientService.getProjectServicesAndSubService().subscribe((data:any) => {
      this.projectServices = data.data.projectServices;
      console.log(this.projectServices);
      this.activeService = this.projectServices[0].id;
      console.log(this.activeService);
      this.isActiveService(this.activeService);
    });
  }
  isActiveService(id: any) {
    this.activeService = id;
    this.isActiveCategory(this.activeCategory);
  }
  isActiveCategory(id: any) {
    this.activeCategory = id;
    this.projectServiesArray = [];
    switch (id) {
      case 1:
        if(this.spType =='CO'){
          this.provider
          .getOrganizationalSPCurrentProjects(this.page)
          .subscribe((data:any) => {
            console.log(data);
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            console.log(this.projectServiesArray);
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }else{
          this.provider
            .getIndividualSPCurrentProjects(this.page)
            .subscribe((data:any) => {
              console.log(data);
              data.data.projects.map((pro: any) => {
                if (pro.projectServiceId == this.activeService) {
                  this.projectServiesArray.push(pro);
                }
              });
              console.log(this.projectServiesArray);
              this.totalpages = data.data.totalPages;
              this.counter(this.totalpages);
              console.log(this.projectServiesArray);
              this.projectServiesArray.length > 0
                ? this.showDetails(this.projectServiesArray[0])
                : '';
            });
        }

        break;
      case 2:
        if(this.spType =='CO'){
          this.provider
          .getOrganizationalSPPendingProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }else{
          this.provider
          .getIndividualSPPendingProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }
       

        break;
      case 3:
        if(this.spType =='CO'){
          this.provider
          .getOrganizationalSPFinishedProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }else{
          this.provider
          .getIndividualSPFinishedProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }
       

        break;
      case 4:
        if(this.spType =='CO'){
          this.provider
          .getOrganizationalSPLateProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }else{
          this.provider
          .getIndividualSPLateProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }
        

        break;
      case 5:
        if(this.spType =='CO'){
          this.provider
          .getOrganizationalSPStoppedProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }else{
          this.provider
          .getIndividualSPStoppedProjects(this.page)
          .subscribe((data:any) => {
            data.data.projects.map((pro: any) => {
              if (pro.projectServiceId == this.activeService) {
                this.projectServiesArray.push(pro);
              }
            });
            this.totalpages = data.data.totalPages;
            this.counter(this.totalpages);
            console.log(this.projectServiesArray);
            this.projectServiesArray.length > 0
              ? this.showDetails(this.projectServiesArray[0])
              : '';
          });
        }
       

        break;
      default:
        console.log('nothing');
    }
  }
  
  current() {
    this.api
      .get(
        `https://app.mohandisy.com/api/Milestone/getMilestonesByOfferId/${this.project.offers[0].id}`
      )
      .subscribe((data:any) => {
        var stones = data.data;
        console.log(stones);
        for (let i = 0; i < stones.length; i++) {
          if (Number(stones[i].milestoneStatusId) == 4) {
            console.log(stones[i].id);

            this.api
              .get(
                `https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToCurrentWork/${Number(
                  stones[i].id
                )}`
              )
              .subscribe({
                next: (data:any) => {
                  Swal.fire('تم تفعيل المشروع بنجاح');
          
                },
              });

            return;
          }
        }
      });
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
 
  mapOnProjectsReuiredWorks(ProjectsReuiredWorks: any) {
    this.projectReqWorks = [];
    ProjectsReuiredWorks.map((ProjectsReuiredWork: any) => {
      this.clientService
        .getRequiredWorkByWorkId(ProjectsReuiredWork.requiredWorkId)
        .subscribe((data:any) => {
          this.projectReqWorks.push(...data.data);
        });
    });
  }
  mapOnProjectsComponets(projectComponents: any) {
    this.projectsComponents = [];
    projectComponents.map((projectComponent: any) => {
      this.clientService
        .getProjectComponentById(projectComponent.componentId)
        .subscribe((data:any) => {
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
