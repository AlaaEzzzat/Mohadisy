import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sp-request-edit',
  templateUrl: './sp-request-edit.component.html',
  styleUrls: ['./sp-request-edit.component.scss']
})
export class SpRequestEditComponent implements OnInit {

  OfferData:any;
  Listprojects:Array<any>=[];
  select:any=0;
  page:number=1;
  numberofMilestones:Array<any>=[];
  totalcost:any=0;
  totalcostMilestone:Array<any>=[];
  araby:any;
  selectProject:any;
  RequiredWorks:Array<any>=[];
  Precentage:Array<number>=[];
  WorkId:Array<number>=[];
  check:any=true;
  totalpages: any = 0;
  pages:Array<any>=[];

  constructor(private api:ApiService,private router:Router)
  {
    this.OfferData=new FormGroup(
    {
      period:new FormControl('',[Validators.required]),
      cost:new FormControl('',[Validators.required]),
      numberOfMilestones:new FormControl('',
      [Validators.required,Validators.pattern('^[1-6]{1}$')]),
      message:new FormControl(''),
      projectId:new FormControl('',[Validators.required]),
      tcost:new FormControl(''),
      precentage:new FormControl('',[Validators.required])

    });

  }

  ngOnInit(): void {


    this.select=localStorage.getItem('idproject');

    this.page=Number(localStorage.getItem("page"));

    this.api.get(`https://app.mohandisy.com/api/PriceQuotes/GetSPPriceQuotesIAppliedFor/Page/${this.page}`).subscribe(data=>{

      this.totalpages=data.data.totalPages;
       this.Listprojects=data.data.projects;
       for(let i=1;i<=this.totalpages;i++)
       this.pages.push(i);
      this.SelectIdProject();

      this.api.get(`https://app.mohandisy.com/api/Offer/getTotalCost?cost=${this.selectProject?.offers[0]?.cost}`).subscribe(data=>{
      this.totalcost=data.data;
      this.checkDataStage();
      this.Initial();
    });

    });











  }

  Initial()
  {

    this.OfferData.get('numberOfMilestones').setValue(this.selectProject?.offers[0]?.numberOfMilestones);
      this.OfferData.get('period').setValue(this.selectProject?.offers[0]?.period);
      this.OfferData.get('cost').setValue(this.selectProject?.offers[0]?.cost);
      this.OfferData.get('message').setValue(this.selectProject?.offers[0]?.message);

    this.api.get(`https://app.mohandisy.com/api/Milestone/getMilestonesByOfferId/${ this.selectProject. offers[0].id}`).subscribe(data=>
       {

        console.log(data.data);

        this.Precentage=[],this.WorkId=[];
        var stages=data.data;
        for(let i=0;i<stages.length;i++){
        this.Precentage[i+1]=stages[i].percentage;
        this.totalcostMilestone[i+1]=stages[i].cost;
        if(stages[i].isFirstMilestone==true)
        this.WorkId[i+1]=8;
        else if(stages[i].isLastMilestone==true)
        this.WorkId[i+1]=9;
        else
        this.WorkId[i+1]=stages[i].requiredWorkId;

       }

       }

       );
  }

  SelectIdProject()
  {
    console.log(this.Listprojects);

    for(let project of this.Listprojects)
    {
      if(project.id==this.select)
      {
        this.selectProject=project;

        break;
      }
     }

     console.log(this.selectProject);



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

  showData(idProject:number)
  {
    this.select=idProject;
    this.SelectIdProject();
    this.Initial();
  }

  changepage(e:any)
  {

   this.page=e;
   this.api.get(`https://app.mohandisy.com/api/PriceQuotes/GetSPPriceQuotesIAppliedFor/Page/${this.page}`).subscribe(data=>{

   this.totalpages=data.totalPages;
    this.Listprojects=data.data.projects;

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
    this.api.get(`https://app.mohandisy.com/api/Offer/getTotalCost?cost=${this.OfferData?.get('cost').value}`).subscribe(data=>{


      this.totalcost=data.data;
      this.checkDataStage();


    });
     }else{
      var milestones=(Number)(this.OfferData?.get('numberOfMilestones').value);
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
      ${this.OfferData?.get('cost').value}&percentage=${precentage}`).subscribe(data=>
      {



        this.totalcostMilestone[stage]=data.data;


      });
    }else if(precentage)
    {
      this.api.get(`https://app.mohandisy.com/api/Offer/getCostByPercentage?cost=${this.OfferData?.get('cost').value}&percentage=${precentage}`).subscribe(data=>
      {

        this.totalcostMilestone[stage]=data.data;

      });

    }

  }

  workId(e:any,stone:number)
  {

    this.WorkId[stone]=e.target.value;

  }



  onSubmit()
  {

    var Allprecentage=new Array(),Allmilestones=new Array();

    for(let i=1;i<=this.OfferData.get('numberOfMilestones').value;i++)
    {
      Allprecentage.push((Number)(this.Precentage[i]));
      console.log(this.WorkId[i]);
      if(Number(this.WorkId[i])==8)
      {


        Allmilestones.push(
          {
            "cost":this.totalcostMilestone[i],
            "percentage":(Number)(this.Precentage[i]),
            "requiredWorkId":1,
            "isFirstMilestone":true,
            "isLastMilestone": false,
            "message":this.OfferData?.get('message').value

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
            "message":this.OfferData?.get('message').value

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
          "message":this.OfferData?.get('message').value
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


    console.log("check data : ", checkData);


     this.api.postJson("https://app.mohandisy.com/api/Offer/validateCostAndPeriod",checkData).subscribe(data=>
      {
        this.check=data.isError;

        if(this.check==false)
        {
        var AllData=
        {
          "id":Number(this.selectProject.offers[0]?.id),
          "projectId":Number(this.select),
          "period":this.OfferData.get('period').value,
          "cost":this.OfferData.get('cost').value,
          "message":this.OfferData.get('message').value,
          "numberOfMilestones":Number(this.OfferData.get('numberOfMilestones').value),
          "milestones":Allmilestones,
          "SizingMethod":null,
          "ContractTerms":null,
          "DisputeResolution":null,
          "ContractorCommitments":null

        }

        console.log("all data : ",AllData);
          this.api.postJson("https://app.mohandisy.com/api/Offer/updateOffer",AllData).subscribe(
          {
            next:(data)=>{
            Swal.fire(
              'تم تعديل العرض بنجاح'
            );

            this.api.get(`https://app.mohandisy.com/api/PriceQuotes/GetSPPriceQuotesIAppliedFor/Page/${this.page}`).subscribe(data=>{
             this.Listprojects=data.data.projects;
            this.showData(Number(this.select));
            console.log(this.select);

            });

            }

          } );
    }


      });







}


}
