import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profilecomplate',
  templateUrl: './profilecomplate.component.html',
  styleUrls: ['./profilecomplate.component.scss'],
})
export class ProfilecomplateComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private provider: ProviderServiceService
  ) {}
  selectRegion: any = 0;
  selectCity: any = 0;
  citiesList: any;
  regionsList: any;
  districtsList: any;
  ngOnInit(): void {
    this.createRegisterForm();

    this.provider.getRegions().subscribe((data) => {
      this.regionsList = data.data;
      console.log(data);
    });
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      emailId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  registerFormSubmit(value: any) {}
  _getCities() {
    //console.log(this.providerData.get("region").value);

    // this.selectRegion = this.providerData.get('region').value;

    this.provider.getCities(this.selectRegion).subscribe((data) => {
      this.citiesList = data.data;
    });

    this._getDistricts();
  }

  _getDistricts() {
    // this.selectCity = this.providerData.get('city').value;
    console.log(this.selectCity);
    if (this.selectCity != 0 && this.selectCity != null)
      this.provider.getDistricts(this.selectCity).subscribe(
        (data) => {
          this.districtsList = data.data;
        },
        (error) => {
          console.log('error');
        }
      );
  }
}
