import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/@models/profile-data';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.scss'],
})
export class UserDashBoardComponent implements OnInit {
  data: ProfileData = {} as ProfileData;
  constructor(private _api: ApiService) {
    this._api
      .get('https://app.mohandisy.com/api/Dashboard/getClientStatus')
      .subscribe((data) => {
        console.log(data);
        this.data = data.data;
        console.log(this.data);
      });
  }

  ngOnInit(): void {}
}
