import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  cuttintID:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  currID(ID:number){
    this.cuttintID=ID;
  }
}
