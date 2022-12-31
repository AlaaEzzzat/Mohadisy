import { ClientService } from './../../../@core/services/client/client.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FunctionsService } from './../../../@core/services/functions/functions.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/@core/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
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
  @Input() projectReqWorks: any = [];
  @Input() startChat: any = (args: any) => {};
  @Input() startComplaint: any = (args: any) => {};
  @Input() showImg: any = (args: any) => {};
  @Input() goToPandding: any = (args: any) => {};
  @Input() goToCurrent: any = (args: any) => {};
  Reason: any;
  toggleItem: any = [];
constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private FunctionsService: FunctionsService,
    private ClientService: ClientService,
    private toastr: ToastrService
  ) {
    this.Reason=this.formBuilder.group(
      {
        reason: new FormControl(),
      }); 
   
  }
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
      reason: this.Reason?.get('reason')?.value,
    };
    console.log(pendingData);
    this.api
      .postJson(
        'https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToPending',
        pendingData
      )
      .subscribe({
        next: (data) => {
          this.goToPandding();
          Swal.fire('تم تعليق المرحله بنجاح');
        },
      });
  }
  stagefinish: any = [];
  calcPrecentage: any = 0;
  finished(stageid: any) {
    this.calcPrecentage += 100.0 / Number(this.projectMilestnes.length);
    if (this.uplaodedFiles?.length > 1) {
      this.uplaodedFiles?.map((file: any) => {
        this.filesFormData.append(file.name, file.file);
      });
      this.ClientService.storeMilestoneFiles(
        stageid,
        this.filesFormData
      ).subscribe((data: any) => {
        this.toastr.info(data.message);
        this.api
          .get(
            `https://app.mohandisy.com/api/Milestone/changeMilestoneStatusToFinished/${stageid}`
          )
          .subscribe({
            next: (data) => {
              this.goToCurrent();
              this.stagefinish[stageid] = 1;
            },
          });
      });
      /* this.ClientService.storeMilestoneFiles() */
    } else {
      this.toastr.error('يجب رفع الملف و الصوره الخاصة بالمرحله ');
    }
  }
  
  ngOnInit(): void {}
  getReqWorkName(requiredWorkId: any) {
    var requiredWork = this.projectReqWorks.find((rq: any) => {
      rq.id == requiredWorkId;
    });
    console.log(requiredWork);
    return requiredWork?.name;
  }

  getTime(end: any, start: any) {
    this.FunctionsService.getTime(end, start);
    /* var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    return Days; */
  }
  download = (url: string, name: any) => {
    this.FunctionsService.download(url, name);
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
  updateMilestoneStatus(milestoneId: any) {
    this.ClientService.changeMilestoneStatusToCurrentWork(
      milestoneId
    ).subscribe((data: any) => {
      this.toastr.info(data.message);
    });
  }
  startMilestone(milestoneId: any) {
    this.ClientService.startMilestone(milestoneId).subscribe((data: any) => {
      this.toastr.info(data.message);
    });
  }
  storeMilestoneFiles(milestoneId: any, files: any) {
    this.ClientService.storeMilestoneFiles(milestoneId, files).subscribe(
      (data: any) => {
        this.toastr.info(data.message);
      }
    );
  }

  uplaodedFiles: any=[];
  imageName:any;
  fileName:any
  filesFormData: any = new FormData();
  onFileUpload(event: any, name: any) {
    if (event.target.files.length > 0) {
      if (name == 'image') {
        if (this.uplaodedFiles?.length > 0) {
          var oldImage = this.uplaodedFiles?.find(
            (file: any) => file.name == name
          );
          if (oldImage) {
            var index = this.uplaodedFiles?.indexOf(oldImage);
            this.uplaodedFiles?.splice(index, 1);
          }
        }
        //لو صوره امسح القديمه
        const myImage = event.target.files[0];
        console.log(myImage)
        this.uplaodedFiles?.push({ name: name, file: myImage });
        this.imageName= myImage.name
        console.log(this.uplaodedFiles);
      } else if (name == 'file') {
        //لو فايل امسح القديمه
        if (this.uplaodedFiles?.length > 0) {
          var oldFile = this.uplaodedFiles?.find(
            (file: any) => file.name == name
          );
          if (oldFile) {
            var index = this.uplaodedFiles?.indexOf(oldFile);
            this.uplaodedFiles?.splice(index, 1);
          }
        }
        const file = event.target.files[0];
        this.fileName = file.name
        this.uplaodedFiles?.push({ name: name, file: file });
        console.log(this.uplaodedFiles);
        /*   this.filesFormData.append(name, file); */
      }
    }
  }
}
