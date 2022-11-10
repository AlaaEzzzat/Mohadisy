import { Router } from '@angular/router';
import { ClientService } from './../../@core/services/client/client.service';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { ICompany } from './../../@models/ICompany';
import { ICompanyPresenter } from './../../@models/ICompanyPresenter';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-company-complete-profile',
  templateUrl: './company-complete-profile.component.html',
  styleUrls: ['./company-complete-profile.component.scss'],
})
export class CompanyCompleteProfileComponent implements OnInit {
  companyUser: ICompany = {} as ICompany;
  companyPresenter: ICompanyPresenter = {} as ICompanyPresenter;
  completeCampanyProfileForm!: FormGroup;
  imageSuccess: boolean = false;
  userSuccess: boolean = false;
  allProjectService: any = [];
  filesFormData: any = new FormData();
  regionsList: any = [];
  citiesList: any = [];
  districtsList: any = [];
  allProjectSubService = [];
  selectedSubServices: any = [];
  uplaodedImages: any = [];
  addingDistrict: boolean = false;
  selectedServices: any = 0;
  selectRegion: any = 0;
  selectCity: any = 0;
  comPhoneNumber: any = '';
  comEmail: any = '';
  comUsername: any = '';
  nextPage: boolean = false;
  isComplete: boolean = false;
  isCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private serviceProviderService: ServiceProviderService,
    private provider: ProviderServiceService,
    private client: ClientService,
    private router: Router
  ) {
    this.completeCampanyProfileForm = this.fb.group({
      companyName: ['', [Validators.required]],
      officePhoneNumber: ['', [Validators.required]],
      websiteLink: ['', [Validators.required]],
      projectServiceId: ['', [Validators.required]],

      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],

      additionalNumber: ['', [Validators.required]],
      buildingNumber: ['', [Validators.required]],
      region: ['', [Validators.required]],
      city: ['', [Validators.required]],
      districtId: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      streetName: ['', [Validators.required]],

      companyRegisterationNumber: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      licenseEndDate: ['', [Validators.required]],
      licenseStartDate: ['', [Validators.required]],
      companyRegisteration: ['', [Validators.required]],
      license: ['', [Validators.required]],
      companyLogo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.comUsername = localStorage.getItem('name')?.replace(/"/g, '') || '';
    this.comEmail = localStorage.getItem('email')?.replace(/"/g, '') || '';
    this.comPhoneNumber =
      localStorage.getItem('phoneNumber')?.replace(/"/g, '') || '';

    this.provider.getRegions().subscribe((data: any) => {
      this.regionsList = data.data;
      console.log(this.regionsList);
    });
    this.client.getProjectServicesAndSubService().subscribe((data: any) => {
      this.allProjectService = data.data.projectServices;
    });
    /* check complete profie or not */
    this.client.checkStatus().subscribe((data: any) => {
      console.log(data.data);
      this.isComplete = data.data.profileAccepted;
      console.log(data.data.profileAccepted);
      this.isCreated = data.data.profileCreated;
      console.log(data.data.profileCreated);
    });
  }
  _getSubServices() {
    this.selectedServices = this.projectServiceId?.value;
    this.serviceProviderService
      .getProjectSubServicesByServiceId(this.selectedServices)
      .subscribe((data: any) => {
        this.allProjectSubService = data.data;
        console.log(this.allProjectSubService);
        console.log(this.allProjectSubService[0]);
      });
  }

  actionOnSubServie(SubId: any) {
    console.log(SubId);
    var flag = 0;
    if (this.selectedSubServices.length > 0) {
      this.selectedSubServices.map((subService: any) => {
        if (subService.projectSubServiceId == SubId) {
          var index = this.selectedSubServices.indexOf(subService);
          this.selectedSubServices.splice(index, 1);
          flag = 1;
        }
      });
      if (flag == 0) {
        this.selectedSubServices.push({
          projectServiceId: this.selectedServices,
          projectSubServiceId: SubId,
        });
      }
    } else {
      this.selectedSubServices.push({
        projectServiceId: this.selectedServices,
        projectSubServiceId: SubId,
      });
    }
    console.log(this.selectedSubServices);
  }
  onImageUpload(event: any, name: any) {
    if (event.target.files.length > 0) {
      console.log(event.target.files);
      const myImage = event.target.files[0];
      this.uplaodedImages.push(myImage);
      this.filesFormData.append(name, myImage);
    }
  }
  get f() {
    return this.completeCampanyProfileForm.controls;
  }
  get companyName() {
    return this.completeCampanyProfileForm.get('companyName');
  }
  get companyRegisteration() {
    return this.completeCampanyProfileForm.get('companyRegisteration');
  }
  get companyRegisterationNumber() {
    return this.completeCampanyProfileForm.get('companyRegisterationNumber');
  }
  get licenseNumber() {
    return this.completeCampanyProfileForm.get('licenseNumber');
  }
  get licenseEndDate() {
    return this.completeCampanyProfileForm.get('licenseEndDate');
  }
  get licenseStartDate() {
    return this.completeCampanyProfileForm.get('licenseStartDate');
  }
  get license() {
    return this.completeCampanyProfileForm.get('license');
  }
  get companyLogo() {
    return this.completeCampanyProfileForm.get('companyLogo');
  }
  get additionalNumber() {
    return this.completeCampanyProfileForm.get('additionalNumber');
  }
  get buildingNumber() {
    return this.completeCampanyProfileForm.get('buildingNumber');
  }
  get CompanyClassificationId() {
    return this.completeCampanyProfileForm.get('CompanyClassificationId');
  }

  get region() {
    return this.completeCampanyProfileForm.get('region');
  }
  get city() {
    return this.completeCampanyProfileForm.get('city');
  }
  get districtId() {
    return this.completeCampanyProfileForm.get('districtId');
  }
  get officePhoneNumber() {
    return this.completeCampanyProfileForm.get('officePhoneNumber');
  }

  get email() {
    return this.completeCampanyProfileForm.get('email');
  }
  get username() {
    return this.completeCampanyProfileForm.get('username');
  }
  get firstName() {
    return this.completeCampanyProfileForm.get('firstName');
  }
  get lastName() {
    return this.completeCampanyProfileForm.get('lastName');
  }
  get phoneNumber() {
    return this.completeCampanyProfileForm.get('phoneNumber');
  }

  get postalCode() {
    return this.completeCampanyProfileForm.get('postalCode');
  }

  get projectServiceId() {
    return this.completeCampanyProfileForm.get('projectServiceId');
  }

  get streetName() {
    return this.completeCampanyProfileForm.get('streetName');
  }
  get websiteLink() {
    return this.completeCampanyProfileForm.get('websiteLink');
  }
  get ospprofileSubServices() {
    return this.completeCampanyProfileForm.get('ospprofileSubServices');
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
  completeCampanyProfileFormSubmit() {
    console.log(this.uplaodedImages);
    console.log(this.filesFormData);

    this.companyUser.companyName = this.companyName?.value;
    this.companyUser.officePhoneNumber = this.officePhoneNumber?.value;
    this.companyUser.websiteLink = this.websiteLink?.value;
    this.companyUser.projectServiceId = this.projectServiceId?.value;
    this.companyUser.additionalNumber = this.additionalNumber?.value;
    this.companyUser.buildingNumber = this.buildingNumber?.value;
    this.companyUser.districtId = this.districtId?.value;
    this.companyUser.postalCode = this.postalCode?.value;
    this.companyUser.streetName = this.streetName?.value;
    this.companyUser.ospprofileSubServices = this.ospprofileSubServices?.value;
    this.companyUser.companyClassificationId = 0;
    this.companyUser.ospprofileSubServices = this.selectedSubServices;
    this.companyUser.ospprofileSubServices = this.selectedSubServices;
    this.companyUser.companyRegisterationNumber =
      this.companyRegisterationNumber?.value;
    this.companyUser.licenseNumber = this.licenseNumber?.value;
    this.companyUser.licenseStartDate = new Date(this.licenseStartDate?.value);
    this.companyUser.licenseEndDate = this.licenseEndDate?.value;

    this.companyPresenter.email = this.email?.value;
    this.companyPresenter.firstName = this.firstName?.value;
    this.companyPresenter.lastName = this.lastName?.value;
    this.companyPresenter.phoneNumber = this.phoneNumber?.value;

    console.log(this.companyUser);
    console.log(this.companyPresenter);
    if (this.selectedSubServices.length > 0) {
      this.serviceProviderService
        .storeOrganizationalProfile(this.companyUser)
        .subscribe({
          next: (response: any) => {
            console.log('companyUser');
            console.log(response);
            this.serviceProviderService
              .storeReprasintative(this.companyPresenter)
              .subscribe({
                next: (response: any) => {
                  console.log('companyPresenter');
                  console.log(response);
                  this.serviceProviderService
                    .storeCompanyProfileFiles(this.filesFormData)
                    .subscribe({
                      next: (response: any) => {
                        console.log('files Sent');
                        this.router.navigate(['Spmanagement/prevWorks']);
                      },
                      error: (err: any) => {
                        console.log(err);
                      },
                    });
                },
                error: (err: any) => {
                  console.log(err);
                },
              });
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    } else {
      alert('يجب إختيار علي الأقل نوع واحد من الخدمات');
    }
  }
  _getCities() {
    this.citiesList = [];
    var selectedRegionId = 0;
    this.selectRegion = this.completeCampanyProfileForm?.get('region')?.value;
    this.regionsList.map((region: any) => {
      if (region.id == this.selectRegion) {
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
  checkStatus(id: any) {
    var flag = 0;
    this.selectedSubServices.map((subService: any) => {
      if (subService.projectSubServiceId == id) {
        var index = this.selectedSubServices.indexOf(subService);
        this.selectedSubServices.splice(index, 1);
        flag = 1;
      }
    });
    return flag;
  }

  _getDistricts() {
    this.selectCity = this.completeCampanyProfileForm?.get('city')?.value;
    console.log(this.selectCity);
    if (this.selectCity != 0 && this.selectCity != null)
      this.provider.getDistricts(this.selectCity).subscribe(
        (data) => {
          if (data.data == '') {
            this.addingDistrict = true;
          } else {
            console.log(data.data);
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
    let region = this.regionsList.find((region: any) => {
      if (region.id == this.completeCampanyProfileForm?.get('region')?.value) {
        return region;
      }
    });
    let city = this.citiesList.find((city: any) => {
      if (city.id == this.completeCampanyProfileForm?.get('city')?.value) {
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
