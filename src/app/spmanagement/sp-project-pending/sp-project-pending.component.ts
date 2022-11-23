import { ApiService } from './../../@core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-project-pending',
  templateUrl: './sp-project-pending.component.html',
  styleUrls: ['./sp-project-pending.component.scss']
})
export class SpProjectPendingComponent implements OnInit {

  Listprojects:Array<any>=[];
  projectComponent:Array<any>=[];
  AllProjectComponent:Array<any>=[];
  RequiredWorks:Array<any>=[];
  selectProject:any=[];
  select:any=0;
  descComponent:Array<any>=[];
  descWork:Array<any>=[];
  documents:Array<any>=[];
  descDocument:Array<any>=[];
  page:number=1;
  result:number=0;
  totalpages: any = 0;
  pages:Array<any>=[];
  selected:number=Date.now();

 constructor(private api:ApiService) { }

 ngOnInit(): void {

   this.api.get("https://app.mohandisy.com/api/Project/getOrganizationalSPPendingProjects/Page/1").subscribe(data=>{

   console.log(data.data.projects);
   this.Listprojects=data.data.projects;
   this.totalpages=data.data.totalPages;
   for(let i=1;i<=this.totalpages;i++)
    this.pages.push(i);
   if(this.Listprojects.length>0)
     this.result=1;


   });

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
    toggoleComponent(componentId:any)
    {

     if(this.descComponent[componentId])
     this.descComponent[componentId]=0;
     else
     this.descComponent[componentId]=1;


    }

    toggoleWork(workId:any)
    {
     if(this.descWork[workId])
     this.descWork[workId]=0;
     else
     this.descWork[workId]=1;

    }

    toggoleDocument(documentId:any)
    {
     if(this.descDocument[documentId])
     this.descDocument[documentId]=0;
     else
     this.descDocument[documentId]=1;
    }


    downloadFile(id:any,file:any)
    {

    }

    changepage(e:any)
    {

     this.page=e;
     console.log(this.page);
     this.api.get(`https://app.mohandisy.com/api/Project/getOrganizationalSPPendingProjects/Page/${this.page}`).subscribe(data=>{

      this.Listprojects=data.data.projects;


   });
    }

 }

