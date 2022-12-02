import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sp-project-current',
  templateUrl: './sp-project-current.component.html',
  styleUrls: ['./sp-project-current.component.scss']
})
export class SpProjectCurrentComponent implements OnInit {

   nameStage:any=
  [
    "المرحله الاولى",
    "المرحله الثانيه",
    "المرحله الثالثه",
    "المرحله الرابعه",
    "المرحله الخامسه",
    "المرحله السادسه"
  ];
  selected: Date = new Date();
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
  Allstages:Array<any>=[];
  togglestage:any=[];
  index:number=0;
  calcPrecentage:number=0;
  statusStage:any="لم يتم الانتهاء من اى مرحله";
  Reason:any;
  Representative:any;


 constructor(private api:ApiService,private router:Router) {
  this.Reason=new FormGroup(
    {
      reason:new FormControl('',[Validators.required]),


    });
 }

 ngOnInit(): void {

   this.api.get("https://app.mohandisy.com/api/Project/getOrganizationalSPCurrentProjects/Page/1").subscribe(data=>{
   console.log(data);
   this.Listprojects=data.data.projects;
   this.totalpages=data.data.totalPages;
   for(let i=1;i<=this.totalpages;i++)
    this.pages.push(i);
   if(this.Listprojects.length>0){
   this.result=1;

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
     this.calcPrecentage=0;
     for(let i=0;i<this.Allstages.length;i++)
     {
      if(this.Allstages[i].milestoneStatusId==3)
      {
        this.calcPrecentage+=(100.0/this.Allstages.length);
      }
     }

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

    pending(stageid:number)
    {

      console.log(stageid);


      var pendingData=
      {
        "milestoneId":stageid,
        "reason":this.Reason.get('reason').value
      }
      console.log(pendingData);
      this.api.postJson("https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToPending",pendingData).subscribe({
        next:(data)=>
        {

            Swal.fire(
              'تم تعليق المرحله بنجاح'
            );

        }

      });

      this.router.navigate(['/Spmanagement/projects/status/pending']);


    }

    finished(stageid:any)
    {
      this.calcPrecentage+=(100.0/Number(this.Allstages.length));

      this.api.get(`https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToFinished/${stageid}`).subscribe({
        next:(data)=>
        {
          console.log(data);
            Swal.fire(
              'تم انهاء المرحله بنجاح'
            );

            this.router.navigate(['/Spmanagement/projects/status/current'],{skipLocationChange: true});
            return;
        }


      })

    }

    downloadFile(filepath:any,file:any)
    {
      var FileSaver = require('file-saver');
      FileSaver.saveAs(filepath, file);

    }

    changepage(e:any)
    {

     this.page=e;
     console.log(this.page);
     this.api.get(`https://app.mohandisy.com/api/Project/getOrganizationalSPCurrentProjects/Page/${this.page}`).subscribe(data=>{

      this.Listprojects=data.data.projects;

   });
    }



 }


