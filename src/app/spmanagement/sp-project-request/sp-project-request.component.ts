import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';



@Component({
  selector: 'app-sp-project-request',
  templateUrl: './sp-project-request.component.html',
  styleUrls: ['./sp-project-request.component.scss']
})
export class SpProjectRequestComponent implements OnInit {

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
  Presentage:Array<number>=[];
  WorkId:Array<number>=[];
  check:any=true;

  constructor(private api:ApiService)
  {
    this.OfferData=new FormGroup(
    {
      period:new FormControl('',[Validators.required]),
      cost:new FormControl('',[Validators.required]),
      numberOfMilestones:new FormControl('',[Validators.max(6)]),
      message:new FormControl('',[Validators.required]),
      projectId:new FormControl('',[Validators.required]),
      tcost:new FormControl(''),
      precentage:new FormControl('',[Validators.required])

    });

  }

  ngOnInit(): void {


    this.select=localStorage.getItem('idproject');

    this.api.get("https://app.mohandisy.com/api/PriceQuotes/getSPNewProjects/Page/1").subscribe(data=>{

    this.Listprojects=data.data.priceQuotes;
    this.SelectIdProject();

    });



  }


  SelectIdProject()
  {
    for(let project of this.Listprojects)
    {
      if(project.id==this.select)
      {
        this.selectProject=project;

        console.log(this.selectProject);

        break;
      }
     }


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
    }
  }
}

  TotalCost()
  {
    this.totalcost=0;
    this.api.get(`https://app.mohandisy.com/api/Offer/getTotalCost?cost=${this.OfferData.get('cost').value}`).subscribe(data=>{


      this.totalcost=data.data;

      this.milestones();


    });




  }


  MilestoneCost(stage:any,precentage:any)
  {

    this.totalcostMilestone[stage]=0;
    this.Presentage[stage]=precentage;
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

  onSubmit()
  {

    var Allprecentage=[],Allmilestones=[];

    for(let i=1;i<=this.OfferData.get('numberOfMilestones').value;i++)
    {
      Allprecentage.push((Number)(this.Presentage[i]));
      console.log(this.WorkId[i]);
      if(this.WorkId[i]==8)
      {

        Allmilestones.push(
          {
            "cost":this.totalcostMilestone[i],
            "percentage":(Number)(this.Presentage[i]),
            "isFirstMilestone":true,
            "isLastMilestone": false,
            "requiredWorkId": 0,
          }
        );

      }else if(this.WorkId[i]==9)
      {
        Allmilestones.push(
          {
            "cost":this.totalcostMilestone[i],
            "percentage":(Number)(this.Presentage[i]),
            "isFirstMilestone":false,
            "isLastMilestone": true,
            "requiredWorkId": 0,
          }
        );

      }else
      {
      Allmilestones.push(
        {
          "cost":this.totalcostMilestone[i],
          "percentage":(Number)(this.Presentage[i]),
          "requiredWorkedId":Number(this.WorkId[i]),
          "isFirstMilestone":false,
          "isLastMilestone": false,
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

    console.log(checkData);


     this.api.postJson("https://app.mohandisy.com/api/Offer/validateCostAndPeriod",checkData).subscribe(data=>
      {
        console.log(data.isError);
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
        "SizingMethod":null,
        "ContractTerms":null,
        "DisputeResolution":null,
        "ContractorCommitments":null

      }


      this.api.postJson("https://app.mohandisy.com/api/Offer/storeOffer",AllData).subscribe(data=>
      {
        console.log(data);
        alert("Send is Success");
      });


  }
}


}
