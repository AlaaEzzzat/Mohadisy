import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-price-offer-project-layout',
  templateUrl: './price-offer-project-layout.component.html',
  styleUrls: ['./price-offer-project-layout.component.scss']
})
export class PriceOfferProjectLayoutComponent implements OnInit {
  @Input() isActive: boolean =false;
  @Input() selectedProject: any;
  @Input() activeProjectsComponents: any;
  @Input() activeProjectReqWorks: any;
  @Input() offersOfSelectedProject: any;
  @Input() showImg:any= (args: any) => {};

  @Input() userType:any=''
  constructor(    private _HttpClient: HttpClient) { }

  ngOnInit(): void {
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
