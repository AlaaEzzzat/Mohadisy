import { FunctionsService } from './../../../@core/services/functions/functions.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/@core/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss'],
})
export class ProjectLayoutComponent implements OnInit {
  Math = Math;
  @Input() project: any;
  @Input() offerSender: any;
  @Input() projectMilestnes: any;
  @Input() activeCategory: any;
  @Input() projectsComponents: any;
  @Input() numOfCompltedMilesones: any;
  @Input() userType: any;
  @Input() projectReqWorks: any;
  @Input() startChat: any = (args: any) => {};
  @Input() startComplaint: any = (args: any) => {};
  @Input() showImg: any = (args: any) => {};
  Reason: any;
  toggleItem: any = [];

  toggleStage(stageId: any) {
    if (this.toggleItem[stageId] == 1) {
      this.toggleItem[stageId] = 0;
    } else {
      this.toggleItem[stageId] = 1;
    }
  }
  pending(stageid: number) {
    var pendingData = {
      milestoneId: stageid,
      reason: this.Reason.get('reason').value,
    };
    console.log(pendingData);
    this.api
      .postJson(
        'https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToPending',
        pendingData
      )
      .subscribe({
        next: (data) => {
          Swal.fire('تم تعليق المرحله بنجاح');
        },
      });
  }
  stagefinish: any = [];
  calcPrecentage: any = 0;

  finished(stageid: any) {
    this.calcPrecentage += 100.0 / Number(this.projectMilestnes.length);
    this.api
      .get(
        `https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToFinished/${stageid}`
      )
      .subscribe({
        next: (data) => {
          this.stagefinish[stageid] = 1;
          console.log(data);
        },
      });
  }  
  constructor(
    private _HttpClient: HttpClient,
    private toester: ToastrService,
    private api: ApiService,
    private FunctionsService:FunctionsService
  ) {
    
  }

  ngOnInit(): void {
    console.log(this.project);
    console.log(this.projectMilestnes);
    console.log(this.projectReqWorks);
    console.log(this.numOfCompltedMilesones)
  }
  getReqWorkName(requiredWorkId: any) {
    var requiredWork = this.projectReqWorks.find((rq: any) => {
      rq.id == requiredWorkId;
    });
    console.log(requiredWork);
  }

  getTime(end: any, start: any) {
    this.FunctionsService.getTime(end,start);
    /* var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    return Days; */
  }
  download = (url: string, name: any) => {
    this.FunctionsService.download(url,name);
   /*  return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    ); */
  };
}
