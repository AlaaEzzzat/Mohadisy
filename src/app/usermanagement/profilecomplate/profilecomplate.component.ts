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
  selector: 'app-profilecomplate',
  templateUrl: './profilecomplate.component.html',
  styleUrls: ['./profilecomplate.component.scss'],
})
export class ProfilecomplateComponent implements OnInit {
  user: any = {};
  registerForm!: FormGroup;
  selectRegion: any = 0;
  selectCity: any = 0;
  citiesList: any;
  regionsList: any;
  districtsList: any = [];
  imageSuccess: boolean = false;
  userSuccess: boolean = false;
  addingDistrict: boolean = false;
  constructor(
    private fb: FormBuilder,
    private provider: ProviderServiceService,
    private apiService: ApiService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      applicationUser: this.fb.group({
        userName: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$'
            ),
          ],
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^(966)[0-9]{9}$'),
            Validators.maxLength(12),
            Validators.minLength(12),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
      }),
      idNumber: [
        '',
        [
          Validators.required,
          /*  Validators.pattern('^[0-9]{10}*$'), */
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      imageFile: ['', [Validators.required]],
      region: ['', [Validators.required]],
      city: ['', [Validators.required]],
      districtId: ['', [Validators.required]],
      buildingNumber: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      postalBox: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      postalCode: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
    });
    this.registerForm?.get('region')?.valueChanges.subscribe(() => {
      console.log(this.registerForm?.get('region')?.value);
      this?._getCities();
    });
  }

  ngOnInit(): void {
    this.provider.getRegions().subscribe((data) => {
      this.regionsList = data.data;
      console.log(this.regionsList);
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
    return this.registerForm.controls;
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('applicationUser.email');
  }
  get phoneNumber() {
    return this.registerForm.get('applicationUser.phoneNumber');
  }
  get userName() {
    return this.registerForm.get('applicationUser.userName');
  }
  get idNumber() {
    return this.registerForm.get('idNumber');
  }
  get imageFile() {
    return this.registerForm.get('imageFile');
  }
  get region() {
    return this.registerForm.get('region');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get districtId() {
    return this.registerForm.get('districtId');
  }
  get buildingNumber() {
    return this.registerForm.get('buildingNumber');
  }
  get postalBox() {
    return this.registerForm.get('postalBox');
  }
  get postalCode() {
    return this.registerForm.get('postalCode');
  }
  onImageUpload(event: any) {
    if (event.target.files.length > 0) {
      console.log(event.target.files);
      const myImage = event.target.files[0];
      this.registerForm.get('imageFile')?.setValue(myImage);
    }
  }

  registerFormSubmit() {
    this.user = this.registerForm.value;
    let streetName = '';
    this.districtsList.map((city: any) => {
      if (city.id == this.user.districtId) {
        streetName = city.nameAr;
      }
    });
    this.user.streetName = streetName;

    let neighborhood = '';
    this.regionsList.map((region: any) => {
      if (region.id == this.user.region) {
        neighborhood = region.nameAr;
      }
    });
    this.user.neighborhood = neighborhood;

    console.log(this.user);
    let imageformData = new FormData();
    imageformData.append('idImage', this.registerForm.get('imageFile')?.value);
    console.log(imageformData.get('idImage'));
    //send image to end point
    this.provider.storeClientIdFile(imageformData).subscribe({
      next: (response: any) => {
        console.log('Image Posted');
        this.imageSuccess = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    delete this.user.imageFile;
    //send data to profile
    this.provider.storeClientProfile(this.user).subscribe({
      next: (response: any) => {
        console.log('user Posted');
        this.userSuccess = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  _getCities() {
    this.citiesList = [];
    this.selectRegion = this.registerForm?.get('region')?.value;
    if (this.selectRegion != 0 && this.selectRegion != null)
      this.provider.getCities(this.selectRegion).subscribe(
        (data) => {
          this.citiesList = data.data;
        },
        (error) => {
          console.log('error');
        }
      );
  }

  _getDistricts() {
    this.selectCity = this.registerForm?.get('city')?.value;
    console.log(this.selectCity);
    if (this.selectCity != 0 && this.selectCity != null)
      this.provider.getDistricts(this.selectCity).subscribe(
        (data) => {
          if (data.data == '') {
            this.addingDistrict = true;
          } else {
            console.log(data.data);
            this.districtsList = data.data;
          }
        },
        (error) => {
          this.addingDistrict = true;
        }
      );
  }
  addAdress(district: any) {
    let region = this.regionsList.find((region: any) => {
      if (region.id == this.registerForm?.get('region')?.value) {
        return region;
      }
    });
    let city = this.citiesList.find((city: any) => {
      if (city.id == this.registerForm?.get('city')?.value) {
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
  }
}
