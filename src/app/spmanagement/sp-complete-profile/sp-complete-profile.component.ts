import { ToastrService } from 'ngx-toastr';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { ClientService } from './../../@core/services/client/client.service';
import { ApiService } from 'src/app/@core/api.service';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-sp-complete-profile',
  templateUrl: './sp-complete-profile.component.html',
  styleUrls: ['./sp-complete-profile.component.scss'],
})
export class SpCompleteProfileComponent implements OnInit {
  user: any = {};
  completeProfileForm!: FormGroup;
  selectRegion: any = 0;
  selectCity: any = 0;
  citiesList: any;
  regionsList: any;
  allCompanies: any = [];
  allBanks: any = [];
  districtsList: any = [];
  imageSuccess: boolean = false;
  userSuccess: boolean = false;
  addingDistrict: boolean = false;
  isComplete: boolean = false;
  isCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private provider: ProviderServiceService,
    private apiService: ApiService,
    private clientService: ClientService,
    private serviceProviderService: ServiceProviderService,
    private toaster:ToastrService
  ) {
    this.completeProfileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/\s/g)]],
      membershipNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      idNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      //Files
      Membership: ['', [Validators.required]],
      Id: ['', [Validators.required]],

      bankId: ['', [Validators.required]],
      bankAccountNumber: [
        '',
        [Validators.required, Validators.pattern('^(SA)[0-9]*$')],
      ],

      additionalNumber: ['', [Validators.required]],

      neighborhood: ['', [Validators.required]],

      city: ['', [Validators.required]],
      /*       cityName: ['', [Validators.required]], */

      districtId: ['', [Validators.required]],
      /* districtName: ['', [Validators.required]], */

      unitNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      buildingNumber: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      postalCode: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
    });
  }

  ngOnInit(): void {
    this.serviceProviderService
      .getAllCompanyClassifications()
      .subscribe((data: any) => {
        this.allCompanies = data.data;
      });
    this.serviceProviderService.getAllBanks().subscribe((data: any) => {
      this.allBanks = data.data;
    });

    this.provider.getRegions().subscribe((data: any) => {
      this.regionsList = data.data;
    });

    /* check complete profie or not */
    this.clientService.checkStatus().subscribe((data: any) => {
      this.isComplete = data.data.profileAccepted;
      this.isCreated = data.data.profileCreated;
    });
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  englishOnly(event: any): boolean {
    if (event.altKey == false && event.ctrlKey == false)
      if (
        (event.keyCode >= 48 &&
          event.keyCode <= 57 &&
          event.shiftKey == false) ||
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 97 && event.keyCode <= 122)
      ) {
        return true;
      }
    return false;
  }

  get f() {
    return this.completeProfileForm.controls;
  }
  get firstName() {
    return this.completeProfileForm.get('firstName');
  }
  get membershipNumber() {
    return this.completeProfileForm.get('membershipNumber');
  }
  get bankAccountNumber() {
    return this.completeProfileForm.get('bankAccountNumber');
  }
  get additionalNumber() {
    return this.completeProfileForm.get('additionalNumber');
  }

  get Membership() {
    return this.completeProfileForm.get('Membership');
  }
  get Id() {
    return this.completeProfileForm.get('Id');
  }

  get bankId() {
    return this.completeProfileForm.get('bankId');
  }

  get companyClassificationId() {
    return this.completeProfileForm.get('companyClassificationId');
  }

  get unitNumber() {
    return this.completeProfileForm.get('unitNumber');
  }

  get idNumber() {
    return this.completeProfileForm.get('idNumber');
  }
  get neighborhood() {
    return this.completeProfileForm.get('neighborhood');
  }
  get city() {
    return this.completeProfileForm.get('city');
  }

  get districtId() {
    return this.completeProfileForm.get('districtId');
  }
  get buildingNumber() {
    return this.completeProfileForm.get('buildingNumber');
  }
  get streetName() {
    return this.completeProfileForm.get('streetName');
  }

  get postalCode() {
    return this.completeProfileForm.get('postalCode');
  }

  completeProfileFormSubmit() {
    const applicationUserId = localStorage.getItem('id')?.replace(/"/g, '');
    this.user = this.completeProfileForm.value;
    this.user.applicationUserId = applicationUserId;
    let fullNameArr = this.completeProfileForm
      .get('firstName')
      ?.value.split(' ');
    this.user.firstName = fullNameArr.splice(0, 1)[0];
    this.user.lastName = fullNameArr.join(' ');

    let cityName = '';
    this.citiesList?.map((city: any) => {
      if (city.id == this.user.city) {
        cityName = city.nameAr;
      }
    });
    this.user.cityName = cityName;

    let districtName = '';
    this.districtsList?.map((district: any) => {
      if (district.id == this.user.districtId) {
        districtName = district.nameAr;
      }
    });
    this.user.districtName = districtName;

    let filesFormDta = new FormData();
    filesFormDta.append('Id', this.completeProfileForm.get('Id')?.value);
    filesFormDta.append(
      'Membership',
      this.completeProfileForm.get('Membership')?.value
    );
    this.serviceProviderService.storeImages(filesFormDta).subscribe({
      next: (response: any) => {
        console.log('Image Posted');
        this.imageSuccess = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    delete this.user.Id;
    delete this.user.Membership;
    this.serviceProviderService
      .storeIndividualServiceProviderProfile(this.user)
      .subscribe({
        next: (response: any) => {
          console.log('service Provider Posted');
          this.userSuccess = true;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  onImageUpload(event: any, name: any) {
    if (event.target.files.length > 0) {
      const myImage = event.target.files[0];
      this.completeProfileForm.get(name)?.setValue(myImage);
    }
  }
  _getCities() {
    this.citiesList = [];
    var selectedRegionId = 0;
    this.selectRegion = this.completeProfileForm?.get('neighborhood')?.value;
    this.regionsList.map((region: any) => {
      if (region.nameAr == this.selectRegion) {
        selectedRegionId = region.id;
      }
    });
    if (selectedRegionId != 0 && selectedRegionId != null)
      this.provider.getCities(selectedRegionId).subscribe(
        (data) => {
          this.citiesList = data.data;
        },
        (error) => {
          console.log('error');
        }
      );
  }

  _getDistricts() {
    this.selectCity = this.completeProfileForm?.get('city')?.value;
    if (this.selectCity != 0 && this.selectCity != null)
      this.provider.getDistricts(this.selectCity).subscribe(
        (data) => {
          if (data.data == '') {
            this.addingDistrict = true;
          } else {
            this.districtsList = data.data;
            this.addingDistrict = false;
          }
        },
        (error) => {
          this.addingDistrict = true;
        }
      );
  }
  addAdress(district: any) {
    if(district){
      let region = this.regionsList.find((region: any) => {
        if (region.id == this.completeProfileForm?.get('region')?.value) {
          return region;
        }
      });
      let city = this.citiesList.find((city: any) => {
        if (city.id == this.completeProfileForm?.get('city')?.value) {
          return city;
        }
      });
      let newAddress = {
        region: region.nameAr,
        city: city.nameAr,
        district: district,
      };
      this.provider.postAdress(newAddress).subscribe({
        next: (response: any) => {
          console.log('address Posted');
          this.addingDistrict = false;
          this._getDistricts();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
          }else{
            this.toaster.error("نأمل إدخال إسم الحي ")
          }
  }
}
