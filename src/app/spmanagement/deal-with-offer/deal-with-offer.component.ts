import { ApiService } from './../../@core/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-deal-with-offer',
  templateUrl: './deal-with-offer.component.html',
  styleUrls: ['./deal-with-offer.component.scss'],
})
export class DealWithOfferComponent implements OnInit {
  @Input() selectProject: any;
  @Input() serviceTypeId: any;
  @Input() typeOfDeal: any;
  @Input() makeOfferToggle: any = (args: any) => {};
  RequiredWorks: Array<any> = [];
  OfferData: FormGroup;
  Listprojects: Array<any> = [];
  projectComponent: Array<any> = [];
  AllProjectComponent: Array<any> = [];
  select: any = 0;
  descComponent: Array<any> = [];
  descWork: Array<any> = [];
  documents: Array<any> = [];
  descDocument: Array<any> = [];
  page: number = 1;
  numberofMilestones: any = [];
  setForm: any = [];
  material: any = [];
  totalpages: any = 0;
  pages: Array<any> = [];
  result: any = 1;
  Precentage: Array<number> = [];
  WorkId: any = [];
  check: any = true;
  totalcostMilestone: Array<any> = [];
  totalcost: any = 0;
  addmaterial: Array<any> = [];
  id: number = 0;
  AddMaterials: Array<any> = [];
  _RequiredWorks: Array<any> = [];
  index1: any = 0;
  makeOffer: boolean = false;
  constructor(private api: ApiService, private router: Router) {
    this.OfferData = new FormGroup({
      period: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      numberOfMilestones: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-6]{1}$'),
      ]),
      message: new FormControl(''),
      projectId: new FormControl('', [Validators.required]),
      tcost: new FormControl(''),
      precentage: new FormControl('', [Validators.required]),

      contractorCommitments: new FormControl('', [Validators.required]),
      sizingMethod: new FormControl('', [Validators.required]),
      contractTerms: new FormControl('', [Validators.required]),
      disputeResolution: new FormControl('', [Validators.required]),
      costMaterial: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      materialTypeId: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.api
      .get('https://app.mohandisy.com/api/Offer/getMaterialtypes')
      .subscribe((data) => {
        this.material = data.data;
      });
    this.api
      .get('https://app.mohandisy.com/api/RequiredWorks/GetAllRequiredWorks')
      .subscribe((data) => {
        for (let work of data.data) {
          if (this.selectProject?.projectRequiredWorks?.length > 0) {
            for (let w of this.selectProject?.projectRequiredWorks) {
              if (w.requiredWorkId == work.id) {
                this.RequiredWorks.push({
                  name: work.name,
                  id: work.id,
                  requiredDocuments: work.requiredDocuments,
                });
              }
            }
          }
        }
      });
    if (this.typeOfDeal == 'edit') {
      this.api
        .get(
          `https://app.mohandisy.com/api/Offer/getTotalCost?cost=${this.selectProject?.offers[0]?.cost}`
        )
        .subscribe((data) => {
          this.totalcost = data.data;
          this.checkDataStage();
          this.Initial();
        });
    }
  }

  Initial() {
    this.OfferData?.get('numberOfMilestones')?.setValue(
      this.selectProject?.offers[0]?.numberOfMilestones
    );
    this.OfferData?.get('period')?.setValue(
      this.selectProject?.offers[0]?.period
    );
    this.OfferData?.get('cost')?.setValue(this.selectProject?.offers[0]?.cost);
    this.OfferData?.get('message')?.setValue(
      this.selectProject?.offers[0]?.message
    );
    this.OfferData?.get('contractorCommitments')?.setValue(
      this.selectProject?.offers[0]?.contractorCommitments
    );
    this.OfferData?.get('contractTerms')?.setValue(
      this.selectProject?.offers[0]?.contractTerms
    );
    this.OfferData?.get('sizingMethod')?.setValue(
      this.selectProject?.offers[0]?.sizingMethod
    );
    this.OfferData?.get('disputeResolution')?.setValue(
      this.selectProject?.offers[0]?.disputeResolution
    );
    this.api
      .get(
        `https://app.mohandisy.com/api/Milestone/getMilestonesByOfferId/${this.selectProject.offers[0].id}`
      )
      .subscribe((data) => {
        var stages = data.data;

        for (let i = 0; i < stages.length; i++) {
          this.Precentage[i] = stages[i].percentage;
          this.totalcostMilestone[i] = stages[i].cost;
          if (stages[i].isFirstMilestone == true) this.WorkId[i] = 8;
          else if (stages[i].isLastMilestone == true) this.WorkId[i] = 9;
          else this.WorkId[i] = stages[i].requiredWorkId;
        }
      });
    this.api
      .get(
        `https://app.mohandisy.com/api/Milestone/getMilestonesByOfferId/${this.selectProject.offers[0].id}`
      )
      .subscribe((data) => {});
  }

  milestones() {
    this.numberofMilestones = [];
    var milestones = this.OfferData?.get('numberOfMilestones')?.value;
    if (milestones <= 6) {
      for (let i = 1; i <= milestones; i++) {
        this.numberofMilestones.push(i);
        this.totalcostMilestone[i] = 0;
        this.Precentage[i] = 0;
      }
    }
  }

  TotalCost() {
    this.totalcost = 0;
    if (this.OfferData?.get('cost')?.value) {
      this.api
        .get(
          `https://app.mohandisy.com/api/Offer/getTotalCost?cost=${
            this.OfferData?.get('cost')?.value
          }`
        )
        .subscribe((data) => {
          this.totalcost = data.data;
          this.checkDataStage();
        });
    } else {
      var milestones = Number(this.OfferData?.get('numberOfMilestones')?.value);
      if (milestones <= 6) {
        for (let i = 1; i <= milestones; i++) {
          (this.Precentage[i] = 0), (this.totalcostMilestone[i] = 0);
        }
      }
    }
  }

  checkDataStage() {
    var milestones = this.OfferData?.get('numberOfMilestones')?.value;
    if (milestones <= 6) {
      for (let i = 1; i <= milestones; i++) {
        this.MilestoneCost(i, this.Precentage[i]);
      }
    }
  }

  MilestoneCost(stage: any, precentage: any) {
    this.totalcostMilestone[stage] = 0;
    this.Precentage[stage] = precentage;
    if (stage == '1' && precentage) {
      this.api
        .get(
          `https://app.mohandisy.com/api/Offer/getFirstMilestoneCost?cost=
      ${this.OfferData?.get('cost')?.value}&percentage=${precentage}`
        )
        .subscribe((data) => {
          this.totalcostMilestone[stage] = data.data;
        });
    } else if (precentage) {
      this.api
        .get(
          `https://app.mohandisy.com/api/Offer/getCostByPercentage?cost=${
            this.OfferData?.get('cost')?.value
          }&percentage=${precentage}`
        )
        .subscribe((data) => {
          this.totalcostMilestone[stage] = data.data;
        });
    }
  }

  workId(e: any, stone: number) {
    this.WorkId[stone-1] = e.target.value;
  }

  setToggle(formNumber: any) {
    if (this.setForm[formNumber] == 1) this.setForm[formNumber] = 0;
    else this.setForm[formNumber] = 1;
  }

  addMaterial() {
    this.id++;
    var nameM;

    for (let i = 0; i < this.material.length; i++) {
      if (
        this.material[i].id ==
        Number(this.OfferData?.get('materialTypeId')?.value)
      ) {
        nameM = this.material[i].name;
        break;
      }
    }
    this.addmaterial.push({
      id: this.id,
      materialName: nameM,
      materialTypeId: this.OfferData?.get('materialTypeId')?.value,
      name: this.OfferData?.get('name')?.value,
      cost: this.OfferData?.get('costMaterial')?.value,
      description: this.OfferData?.get('description')?.value,
    });
  }

  deleteMaterial(materialId: any) {
    this.addmaterial = this.addmaterial.filter((data) => data.id != materialId);
  }

  onSubmit() {
    var Allprecentage = new Array(),
      Allmilestones = new Array();
    for (
      let i = 1;
      i <= this.OfferData?.get('numberOfMilestones')?.value;
      i++
    ) {
      Allprecentage.push(Number(this.Precentage[i]));
      if (this.WorkId[i - 1] == 8) {
        Allmilestones.push({
          cost: this.totalcostMilestone[i],
          percentage: Number(this.Precentage[i]),
          requiredWorkId: null,
          isFirstMilestone: true,
          isLastMilestone: false,
          message: this.OfferData?.get('message')?.value,
        });
      } else if (this.WorkId[i - 1] == 9) {
        Allmilestones.push({
          cost: this.totalcostMilestone[i],
          percentage: Number(this.Precentage[i]),
          requiredWorkId: null,
          isFirstMilestone: false,
          isLastMilestone: true,
          message: this.OfferData?.get('message')?.value,
        });
      } else {
        Allmilestones.push({
          cost: this.totalcostMilestone[i],
          percentage: Number(this.Precentage[i]),
          requiredWorkId: Number(this.WorkId[i - 1]),
          isFirstMilestone: false,
          isLastMilestone: false,
          message: this.OfferData?.get('message')?.value,
        });
      }
    }

    var checkData = {
      cost: this.OfferData?.get('cost')?.value,
      numberOfMilestones: this.OfferData?.get('numberOfMilestones')?.value,
      milestonesPercentages: Allprecentage,
    };
    if (this.typeOfDeal == 'send') {

      this.AddMaterials = [];
      for (let i = 0; i < this.addmaterial.length; i++) {
        this.AddMaterials.push({
          materialTypeId: this.addmaterial[i].materialTypeId,
          name: this.addmaterial[i].name,
          cost: this.addmaterial[i].cost,
          description: this.addmaterial[i].description,
        });
      }

      this.api
        .postJson(
          'https://app.mohandisy.com/api/Offer/validateCostAndPeriod',
          checkData
        )
        .subscribe((data) => {
          this.check = data.isError;
          if (this.check == false) {
            var AllData = {
              projectId: this.selectProject.id,
              period: Number(this.OfferData?.get('period')?.value),
              cost: this.OfferData?.get('cost')?.value,
              message: this.OfferData?.get('message')?.value,
              numberOfMilestones: Number(
                this.OfferData?.get('numberOfMilestones')?.value
              ),
              milestones: Allmilestones,
              sizingMethod: this.OfferData?.get('sizingMethod')?.value,
              contractTerms: this.OfferData?.get('contractTerms')?.value,
              disputeResolution:
                this.OfferData?.get('disputeResolution')?.value,
              contractorCommitments: this.OfferData?.get(
                'contractorCommitments'
              )?.value,
              materials: this.AddMaterials,
            };
            this.api
              .postJson(
                'https://app.mohandisy.com/api/Offer/storeOffer',
                AllData
              )
              .subscribe({
                next: (data) => {
                  Swal.fire('تم تقديم العرض بنجاح');
                  this.makeOfferToggle()
                },
              });
          }
        });
    } else {
      this.api
        .postJson(
          'https://app.mohandisy.com/api/Offer/validateCostAndPeriod',
          checkData
        )
        .subscribe((data) => {
          this.check = data.isError;

          if (this.check == false) {
            var AllData = {
              id: Number(this.selectProject.offers[0]?.id),
              projectId: this.selectProject.id,
              period: this.OfferData.get('period')?.value,
              cost: this.OfferData.get('cost')?.value,
              message: this.OfferData.get('message')?.value,
              numberOfMilestones: Number(
                this.OfferData.get('numberOfMilestones')?.value
              ),
              milestones: Allmilestones,
              SizingMethod: null,
              ContractTerms: null,
              DisputeResolution: null,
              ContractorCommitments: null,
            };
            this.api
              .postJson(
                'https://app.mohandisy.com/api/Offer/updateOffer',
                AllData
              )
              .subscribe({
                next: (data) => {
                  Swal.fire('تم تعديل العرض بنجاح');
                  this.makeOfferToggle()
                },
              });
          }
        });
    }
  }
}
