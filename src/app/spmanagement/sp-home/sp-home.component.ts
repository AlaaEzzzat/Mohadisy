import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-home',
  templateUrl: './sp-home.component.html',
  styleUrls: ['./sp-home.component.scss'],
})
export class SpHomeComponent implements OnInit {
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  constructor() {}

  ngOnInit(): void {}
}
