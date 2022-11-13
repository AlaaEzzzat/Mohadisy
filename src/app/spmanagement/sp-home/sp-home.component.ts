import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-home',
  templateUrl: './sp-home.component.html',
  styleUrls: ['./sp-home.component.scss'],
})
export class SpHomeComponent implements OnInit {
  username: string = localStorage.getItem('name')?.replace(/"/g, '') || '';
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  constructor() {}

  ngOnInit(): void {
    /*   this.signalr.startConnection();
    setTimeout(() => {
      this.signalr.askServerListener();
      this.signalr.askServer();
    }, 2000);*/
  }
}
