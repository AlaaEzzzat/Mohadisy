import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
@Input() pagenation :any = [];
@Input() next:any= (args: any) => {};
@Input() prev:any= (args: any) => {};
@Input() page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  counter(x: number) {
    this.pagenation = [...Array(x).keys()];
  }
 
}
