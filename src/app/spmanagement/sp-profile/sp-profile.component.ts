import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss'],
})
export class SpProfileComponent implements OnInit {
  cars = [
    { id: 1, name: 'BMW Hyundai' },
    { id: 2, name: 'Kia Tata' },
    { id: 3, name: 'Volkswagen Ford' },
    { id: 4, name: 'Renault Audi' },
    { id: 5, name: 'Mercedes Benz Skoda' },
  ];

  imageSrc?: string;
  secandform: boolean = false;
  providerData: any;
  selectRegion: any = 0;
  selectCity: any = 0;
  citiesList: any;
  regionsList: any;
  districtsList: any;
  servicesType: Array<any> = [];
  subService: Array<any> = [];
  Files: Array<any> = [];
  FilterSearch: Array<any> = [];
  checkedSubServices: Array<any> = [];

  constructor(private provider: ProviderServiceService) {
    this.providerData = new FormGroup({
      TypeService: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      CompNum: new FormControl('', [Validators.required]),
      licencesNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),
      companyPhoneNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),
      site_url: new FormControl('', [Validators.required]),
      servicetype: new FormControl('', [Validators.required]),
      search_name_input: new FormControl('', [Validators.required]),
      yearly_budget: new FormControl('', [
        Validators.required,
        Validators.min(500),
      ]),
      region: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+ '),
      ]),
      city: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      buildNo: new FormControl('', [Validators.required]),
      postal_box: new FormControl('', [
        Validators.required,
        Validators.pattern('d{5}'),
      ]),
      postal_code: new FormControl('', [
        Validators.required,
        Validators.pattern('d{5}'),
      ]),
      StreetName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+ '),
      ]),
      representative_name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      representative_lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      representative_email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      representative_phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),

      search: new FormControl('', Validators.required),
      CompanyLogo: new FormControl('', [Validators.required]),
      logoSource: new FormControl('', [Validators.required]),
      CompanyRegisteration: new FormControl('', [Validators.required]),
      License: new FormControl('', [Validators.required]),
      attach_registerSource: new FormControl('', [Validators.required]),
      companyRegisterationNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),
    });
  }

  ngOnInit(): void {
    this.provider.getRegions().subscribe((data) => {
      this.regionsList = data.data;
    });

    this.provider.projectServices().subscribe((data) => {
      this.servicesType = data.data;
    });
  }

  get f() {
    return this.providerData.controls;
  }

  _getCities() {
    //console.log(this.providerData.get("region").value);

    this.selectRegion = this.providerData.get('region').value;

    this.provider.getCities(this.selectRegion).subscribe((data) => {
      this.citiesList = data.data;
    });

    this._getDistricts();
  }

  _getDistricts() {
    this.selectCity = this.providerData.get('city').value;
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

  /******************start services and subservices***************/

  _subServices() {
    this.checkedSubServices = [];
    this.subService = [];
    var serviceId = this.providerData.get('servicetype').value;
    this.provider.subServicesByServiceId(serviceId).subscribe((data) => {
      this.FilterSearch = data.data;
      this.subService = data.data;
    });
  }

  _search() {
    var x = this.providerData.get('search').value;
    this.FilterSearch = this.subService.filter((e) => e.name.includes(x));
    //console.log( this.FilterSearch);
  }
  addSubService(subServiceId: number) {
    this.checkedSubServices[subServiceId] = 1;
  }

  deleteSubService(subServiceId: number) {
    this.checkedSubServices[subServiceId] = 0;
  }

  /***********************end services and subservices****************************/

  SelectFile_1(event: any) {
    this.Files[0] = <File>event.target.files[0];
  }

  SelectFile_2(event: any) {
    /*this.Files[1]={
      "idFile":<File>event.target.files[0].name,
      "membershipFile":<File>event.target.files[0].name
     };*/

    this.Files[1] = <File>event.target.files[0];
  }

  SelectFile_3(event: any) {
    this.Files[2] = <File>event.target.files[0];
  }

  // onFileChange(event: any) {
  //   const reader = new FileReader();

  //   if (event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;

  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       this.imageSrc = reader.result as string;

  //       this.providerData.patchValue({
  //         fileSource: reader.result,
  //       });
  //     };
  //   }
  // }

  onSubmit() {
    this.providerData.value['servicetype'] = [];

    this.subService.forEach((e) => {
      if (this.checkedSubServices[e.id])
        this.providerData.value['servicetype'].push(e.id);
    });
    console.log(this.providerData.value);

    //console.log(this.providerData.value['servicetype']);

    var formFiles: any = new FormData();

    formFiles.append('CompanyLogo', this.Files[0]);
    formFiles.append('CompanyRegisteration', this.Files[1]);
    formFiles.append('License', this.Files[2]);

    //console.log(formFiles);

    /*var formFiles=
     {
      'CompanyLogo':this.Files[0],
      'CompanyRegisteration':this.Files[1],
      'License':this.Files[3]
     }*/

    this.provider.Files(formFiles).subscribe((data) => {
      console.log(data);
    });

    /*var formRdata:any=new FormData();
      formRdata.append('firstName',this.providerData.value['representative_name']);
      formRdata.append('lastName',this.providerData.value['representative_lastName']);
      formRdata.append('email',this.providerData.value['representative_email']);
      formRdata.append('phoneNumber',this.providerData.value['representative_phone']);*/

    var formRdata = {
      firstName: this.providerData.value['representative_name'],
      lastName: this.providerData.value['representative_lastName'],
      email: this.providerData.value['representative_email'],
      phoneNumber: this.providerData.value['representative_phone'],
    };

    this.provider.representative(formRdata).subscribe((data) => {
      console.log(data);
    });

    this.provider.getR().subscribe((data) => {
      console.log(data);
    });

    /*this.provider.storeProfile(this.providerData.value).subscribe((data) => {
      console.log(data);

    });*/

    //    })
  }
}
