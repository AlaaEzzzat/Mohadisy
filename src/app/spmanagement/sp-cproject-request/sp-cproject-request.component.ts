import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sp-cproject-request',
  templateUrl: './sp-cproject-request.component.html',
  styleUrls: ['./sp-cproject-request.component.scss']
})
export class SpCprojectRequestComponent implements OnInit {

   OfferData:any;
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
   page:number=0;
   numberofMilestones:any=[];

  constructor(private api:ApiService)
  {
    this.OfferData=new FormGroup(
      {
        period:new FormControl('',[Validators.required]),
        cost:new FormControl('',[Validators.required]),
        numberOfMilestones:new FormControl('',
       [Validators.required,Validators.max(6),Validators.min(1)]),
        message:new FormControl(''),
        projectId:new FormControl('',[Validators.required]),
        tcost:new FormControl(''),
        precentage:new FormControl('',[Validators.required])

      });

  }

  ngOnInit(): void {

    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/1").subscribe(data=>{

    this.Listprojects=data.data.priceQuotes;

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

     changepage(e:any)
     {

      this.page=e;
      console.log(this.page);
      this.api.get(`https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/${this.page}`).subscribe(data=>{

       this.Listprojects=data.data.priceQuotes;


    });
     }

     TotalCost()
     {

     }

     milestones()
     {

     }

     MilestoneCost(stone:any,precentage:any)
     {

     }

     workId(id:any,stone:any)
     {

     }

     onSubmit()
     {

     }


  }
