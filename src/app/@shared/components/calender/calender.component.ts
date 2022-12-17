import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  selected: Date = new Date();
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  pickDate(date: any): void {
    this.onDatePicked.emit(date);
  }
  constructor() {}
  ngOnInit(): void {
    this.pickDate(this.selected);
  }
}
