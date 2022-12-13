import { Component, OnInit,Input } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'app-milestone-card',
  templateUrl: './milestone-card.component.html',
  styleUrls: ['./milestone-card.component.scss']
})
export class MilestoneCardComponent implements OnInit {
  @Input() activeProject: any;
  @Input() activeMiliestones: any;
  @Input() requiredWorks: any;
  @Input() userType: any = '';
  @Input() toggleShow:any= (args: any) => {};
  constructor() { }
  getDate(date: any) {
    return moment(date).utc().format('YYYY-MM-DD');
  }
  ngOnInit(): void {
  }

}
