import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent implements OnInit {
@Input() project:any;
@Input() offerSender:any;
@Input() projectMilestnes:any; 
@Input() projectsComponents:any;
@Input() numOfCompltedMilesones:any;
@Input() userType:any;
@Input() projectReqWorks:any;
@Input() startChat:any= (args: any) => {};
@Input() startComplaint:any= (args: any) => {};
@Input() showImg:any= (args: any) => {};
  constructor(private _HttpClient : HttpClient) { }

  ngOnInit(): void {
    console.log(this.project)
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24); //Diference in Days
    return Days;
  }
  download = (url: string, name: any) => {
    console.log('hjvhgvhg')
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    );
  };

}
