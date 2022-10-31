import { ApiService } from 'src/app/@core/api.service';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  districtsList: any;
  imageSuccess: boolean = false;
  userSuccess: boolean = false;
  constructor(
    private fb: FormBuilder,
    private provider: ProviderServiceService,
    private apiService: ApiService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      applicationUser: this.fb.group({
        userName: ['', Validators.required],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^(966)[0-9]{9}$')],
        ],
        email: ['', [Validators.required, Validators.email]],
      }),
      idNumber: ['', [Validators.required, Validators.minLength(10)]],
      imageFile: ['', [Validators.required]],
      region: ['', [Validators.required]],
      city: ['', [Validators.required]],
      districtId: ['', [Validators.required]],
      /* streetName: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]], */
      buildingNumber: ['', [Validators.required]],
      postalBox: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
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
          this.districtsList = data.data;
        },
        (error) => {
          console.log('error');
        }
      );
  }
}
