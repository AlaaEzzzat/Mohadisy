
import { CoreModule } from './../../@core/@core.module';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';



@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss'],
})
export class SpProfileComponent implements OnInit {

  selected:Date|null=null;
  profile:any;
  constructor(
    private provider: ProviderServiceService,
    private api: ApiService
  ) {
  }


  ngOnInit(): void {
    this.api.get("https://app.mohandisy.com/api/OrganizationalServiceProvider/getProfile").subscribe(data=>
      {
        this.profile=data.data;
        console.log(this.profile);
      })

  }








}
