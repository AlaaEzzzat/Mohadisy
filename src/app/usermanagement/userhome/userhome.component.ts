import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'],
})
export class UserhomeComponent implements OnInit {
  status: boolean = false;
  username: string = localStorage.getItem('name') || '';
  showpopup: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}
