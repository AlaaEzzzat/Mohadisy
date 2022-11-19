import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss'],
})
export class SpProfileComponent implements OnInit {
  


  constructor(
    private provider: ProviderServiceService,
    private api: ApiService
  ) {
  }


  ngOnInit(): void {

  }








}
