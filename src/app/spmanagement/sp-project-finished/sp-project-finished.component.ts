import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { IMessage } from 'src/app/@models/message';
import { ChatService } from 'src/app/@core/services/chat/chat.service';

@Component({
  selector: 'app-sp-project-finished',
  templateUrl: './sp-project-finished.component.html',
  styleUrls: ['./sp-project-finished.component.scss']
})
export class SpProjectFinishedComponent implements OnInit {
  selected: Date = new Date();
  Listprojects:Array<any>=[];
  projectComponent:Array<any>=[];
  AllProjectComponent:Array<any>=[];
  RequiredWorks:Array<any>=[];
  selectProject:any=[];
  select:any=0;
  documents:Array<any>=[];
  descDocument:Array<any>=[];
  page:number=1;
  result:number=0;
  totalpages: any = 0;
  pages:Array<any>=[];
  Allstages:Array<any>=[];
  togglestage:any=[];
  Reason:any;
  Representative:any;
  startChat:any=false;
  receiverId:string='';
  message: IMessage = {} as IMessage;
  fileMessage: any = '';
  type:number=Number(localStorage.getItem('typeId'));
  _RequiredWorks:Array<any>=[];
  index:any=0;


 constructor(private api:ApiService,private router:Router, private chatService: ChatService) {

 }

 ngOnInit(): void {

   this.api.get("https://app.mohandisy.com/api/Project/getOrganizationalSPFinishedProjects/Page/1").subscribe(data=>{
   console.log(data);
   this.Listprojects=data.data.projects;
   this.totalpages=data.data.totalPages;
   for(let i=1;i<=this.totalpages;i++)
    this.pages.push(i);
   if(this.Listprojects.length>0){
   this.result=1;
   this.api.get("https://app.mohandisy.com/api/RequiredWorks/GetAllRequiredWorks").subscribe
   (data=>{

    console.log(data);
     for(let project of this.Listprojects){
     for(let work of data.data)
     {
       let f=0;

         for(let w of project.projectRequiredWorks)
         {

           if(w.requiredWorkId==work.id)
           {

             this._RequiredWorks.push({
               "name":work.name
              });

           f=1;
           break;

           }

         }
         if(f)
         break;
       }


     }

     });

   }


   });

   this.api.get("https://app.mohandisy.com/api/Representative/getRepresentative").subscribe(
    data=>
    {
      this.Representative=data.data;
      console.log( this.Representative);

    }
   );


 }


 showData(idProject:number)
 {
   this.select=idProject;

   for(let project of this.Listprojects)
   {
     if(project.id==this.select)
     {
       this.selectProject=project;

       break;
     }
    }
    //console.log(this.selectProject);

    this.api.get(`https://app.mohandisy.com/api/Milestone/getMilestonesByOfferId/${ this.selectProject.offers[0].id}`).subscribe(data=>
   {
    this.togglestage=[];
     this.Allstages=data.data;
     console.log(this.Allstages);
     this.index=0;


   }

   );

   this.projectComponent=[],this.RequiredWorks=[];
   this.api.get("https://app.mohandisy.com/api/Project/getAllProjectComponents").
    subscribe(data=>{
     this.AllProjectComponent=data.data;

      for(let component of this.AllProjectComponent)  {

         for(let c of this.selectProject.projectComponents){
         if(c.componentId==component.id){
          this.projectComponent.push({
          "name":component.name,
           "id":component.id,
           "description":component.description
          });
           }
         }




       }

   })

   /**************Requied work******************* */

   this.api.get("https://app.mohandisy.com/api/RequiredWorks/GetAllRequiredWorks").subscribe
   (data=>{

     for(let work of data.data)
     {
         for(let w of this.selectProject.projectRequiredWorks)
         {
           if(w.requiredWorkId==work.id)
           {
             this.RequiredWorks.push({
               "name":work.name,
               "id":work.id,
               "requiredDocuments":work.requiredDocuments
           });
           }
         }


     }

     });


  }






    /*************************************/
    /*toggoleComponent(componentId:any)
    {

     if(this.descComponent[componentId])
     this.descComponent[componentId]=0;
     else
     this.descComponent[componentId]=1;


    }*/


    toggleStage(stageId:any)
    {

     if(this.togglestage[stageId]==1){
      this.togglestage[stageId]=0;
      }
      else{
      this.togglestage[stageId]=1;
      }

    }



    downloadFile(filepath:any,file:any)
    {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(filepath, file);

    }



    toggleChat =()=>
    {
      this.startChat=!this.startChat;
    }


     onFileUpload(event: any) {
      if (event.target.files.length > 0) {
        const myfile = event.target.files[0];
        this.fileMessage = myfile;
      }
    }

      sendMessage(message: string) {

       if (this.receiverId == '') {
          this.receiverId = this.selectProject.clientProfile.applicationUserId;
        }
        var type: number = 1;
        this.message.content = message;
        this.message.messageTypeId = type;
        this.message.receiverId = this.receiverId;
        this.sendMessageToEndPoint(this.message, this.receiverId);
        if (this.fileMessage) {
          type = 2;
          this.message.content = this.fileMessage;
          this.message.messageTypeId = type;
          this.message.receiverId = this.receiverId;
          this.sendMessageToEndPoint(this.fileMessage, this.receiverId);
        }

      }

      sendMessageToEndPoint(message: any, receiverId: any) {
        this.chatService.sendMessage(message).subscribe({
          next: (data: any) => {
            console.log(data);
            this.startChat = false;
            this.router.navigate(['/Spmanagement/chat']);
          },
          error: (error: any) => {
            console.log(error);
          },
        });
      }

    changepage(e:any)
    {

     this.page=e;
     console.log(this.page);
     this.api.get(`https://app.mohandisy.com/api/Project/getOrganizationalSPFinishedProjects/Page/${this.page}`).subscribe(data=>{

      this.Listprojects=data.data.projects;


   });
    }



 }


