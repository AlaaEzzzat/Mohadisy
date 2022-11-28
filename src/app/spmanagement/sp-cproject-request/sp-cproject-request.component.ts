import { Router } from '@angular/router';
import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
   page:number=1;
   numberofMilestones:any=[];
   setForm:any=[];
   material:any=[];
   totalpages: any = 0;
   pages:Array<any>=[];
   result:any=1;
   Precentage:Array<number>=[];
   WorkId:Array<number>=[];
  check:any=true;
  totalcostMilestone:Array<any>=[];
   totalcost:any=0;
   addmaterial:Array<any>=[];
   id:number=0;
   AddMaterials:Array<any>=[];


  constructor(private api:ApiService ,private router:Router)
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
        precentage:new FormControl('',[Validators.required]),
        contractorCommitments:new FormControl('',[Validators.required]),
        sizingMethod:new FormControl('',[Validators.required]),
        contractTerms:new FormControl('',[Validators.required]),
        disputeResolution:new FormControl('',[Validators.required]),
        costMaterial:new FormControl(''),
        name:new FormControl(''),
        description:new FormControl(''),
        materialTypeId:new FormControl('')

      });

  }

  ngOnInit(): void {

    this.select=localStorage.getItem('idproject');


    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/1").subscribe(data=>{

    this.Listprojects=data.data.priceQuotes;
    this.totalpages=data.data.totalPages;
    for(let i=1;i<=this.totalpages;i++)
    this.pages.push(i);

    if(this.Listprojects.length>0)
    this.result=1;

    this.showData(this.select);

    });




    this.api.get("https://app.mohandisy.com/api/Offer/getMaterialtypes").subscribe(
      data=>{
        this.material=data.data;
      }

    );

  }


  showData(idProject:number)
  {
    this.OfferData.reset();

    this.select=idProject;



    for(let project of this.Listprojects)
    {
      if(project.id==this.select)
      {
        this.selectProject=project;
        console.log(this.selectProject);

        break;
      }
     }


    this.RequiredWorks=[];

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










     changepage(e:any)
     {

      this.page=e;
      console.log(this.page);
      this.api.get(`https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/${this.page}`).subscribe(data=>{

       this.Listprojects=data.data.priceQuotes;


    });
     }

     milestones()
     {
       this.numberofMilestones=[];
       var milestones=this.OfferData.get('numberOfMilestones').value;
       if(milestones<=6){
       for(let i=1;i<=milestones;i++)
       {
         this.numberofMilestones.push(i);
         this.totalcostMilestone[i]=0;
         this.Precentage[i]=0;
       }
     }
   }

     TotalCost()
     {
       this.totalcost=0;

       if(this.OfferData.get('cost').value){
       this.api.get(`https://app.mohandisy.com/api/Offer/getTotalCost?cost=${this.OfferData.get('cost').value}`).subscribe(data=>{


         this.totalcost=data.data;
         this.checkDataStage();


       });
        }else{
         var milestones=(Number)(this.OfferData.get('numberOfMilestones').value);
         console.log(milestones);
         if(milestones<=6){
         for(let i=1;i<=milestones;i++)
         {
         this.Precentage[i]=0,
         this.totalcostMilestone[i]=0;

         }
          }

        }

     }

     checkDataStage()
     {
       var milestones=this.OfferData.get('numberOfMilestones').value;
       if(milestones<=6){
       for(let i=1;i<=milestones;i++)
       {
         this.MilestoneCost(i,this.Precentage[i]);
       }
        }

     }


     MilestoneCost(stage:any,precentage:any)
     {

       this.totalcostMilestone[stage]=0;
       this.Precentage[stage]=precentage;
       if(stage=="1"&&precentage)
       {
         this.api.get(`https://app.mohandisy.com/api/Offer/getFirstMilestoneCost?cost=
         ${this.OfferData.get('cost').value}&percentage=${precentage}`).subscribe(data=>
         {



           this.totalcostMilestone[stage]=data.data;


         });
       }else if(precentage)
       {
         this.api.get(`https://app.mohandisy.com/api/Offer/getCostByPercentage?cost=${this.OfferData.get('cost').value}&percentage=${precentage}`).subscribe(data=>
         {

           this.totalcostMilestone[stage]=data.data;

         });

       }

     }

     workId(e:any,stone:number)
     {

       this.WorkId[stone]=e.target.value;


     }








     setToggle(formNumber:any)
     {


      if(this.setForm[formNumber]==1)
      this.setForm[formNumber]=0;
      else
      this.setForm[formNumber]=1;

     }

     addMaterial()
     {
      this.id++;
      var nameM;

      for(let i=0;i<this.material.length;i++)
      {
        if(this.material[i].id==Number(this.OfferData.get('materialTypeId').value))
        {
          nameM=this.material[i].name;
          break;

        }
      }
      this.addmaterial.push( {
        "id":this.id,
        "materialName":nameM,
        "materialTypeId": this.OfferData.get('materialTypeId').value,
        "name": this.OfferData.get('name').value,
        "cost": this.OfferData.get('costMaterial').value,
        "description": this.OfferData.get('description').value
        })


     }

     deleteMaterial(materialId:any)
     {


      this.addmaterial=this.addmaterial.filter(data=>data.id!=materialId);
      console.log(this.addmaterial);

     }

     onSubmit()
     {

       var Allprecentage=[],Allmilestones=[];

       for(let i=1;i<=this.OfferData.get('numberOfMilestones').value;i++)
       {
         Allprecentage.push((Number)(this.Precentage[i]));
         if(Number(this.WorkId[i])==8)
         {


           Allmilestones.push(
             {
               "cost":this.totalcostMilestone[i],
               "percentage":(Number)(this.Precentage[i]),
               "requiredWorkId":1,
               "isFirstMilestone":true,
               "isLastMilestone": false,
               "message":this.OfferData.get('message').value

             }
           );

         }else if(Number(this.WorkId[i])==9)
         {
           Allmilestones.push(
             {
               "cost":this.totalcostMilestone[i],
               "percentage":(Number)(this.Precentage[i]),
               "requiredWorkId": 1,
               "isFirstMilestone":false,
               "isLastMilestone": true,
               "message":this.OfferData.get('message').value

             }
           );

         }else
         {
         Allmilestones.push(
           {
             "cost":this.totalcostMilestone[i],
             "percentage":(Number)(this.Precentage[i]),
             "requiredWorkedId":Number(this.WorkId[i]),
             "isFirstMilestone":false,
             "isLastMilestone": false,
             "message":this.OfferData.get('message').value
           }
         );
         }

       }



       var checkData=
       {
         "cost":this.OfferData.get('cost').value,
         "numberOfMilestones":this.OfferData.get('numberOfMilestones').value,
         "milestonesPercentages":Allprecentage
       }



       this.AddMaterials=[];
       for(let i=0;i<this.addmaterial.length;i++)
       {
        this.AddMaterials.push({
          "materialTypeId": this.addmaterial[i].materialTypeId,
          "name": this.addmaterial[i].name,
          "cost": this.addmaterial[i].cost,
          "description": this.addmaterial[i].description
          });

       }



        this.api.postJson("https://app.mohandisy.com/api/Offer/validateCostAndPeriod",checkData).subscribe(data=>
         {
           this.check=data.isError;

         });

         if(this.check==false)
         {
         var AllData=
         {
           "projectId":Number(this.select),
           "period":this.OfferData.get('period').value,
           "cost":this.OfferData.get('cost').value,
           "message":this.OfferData.get('message').value,
           "numberOfMilestones":Number(this.OfferData.get('numberOfMilestones').value),
           "milestones":Allmilestones,
           "sizingMethod":this.OfferData.get('sizingMethod').value,
           "contractTerms":this.OfferData.get('contractTerms').value,
           "disputeResolution":this.OfferData.get('disputeResolution').value,
           "contractorCommitments":this.OfferData.get('contractorCommitments').value,
           "materials":this.AddMaterials

         }


         console.log(AllData);

         this.api.postJson("https://app.mohandisy.com/api/Offer/storeOffer",AllData).subscribe(
         {
           next:(data)=>{
           Swal.fire(
             'تم تقديم العرض بنجاح'
           );
           this.router.navigate(['/Spmanagement/projects/all']);
           }

         } );

          }









   }



  }
