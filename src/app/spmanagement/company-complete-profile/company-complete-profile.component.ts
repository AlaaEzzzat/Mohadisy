import { SignalrService } from './../../@core/services/signalR/signalr.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ClientService } from './../../@core/services/client/client.service';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { ICompany } from './../../@models/ICompany';
import { ICompanyPresenter } from './../../@models/ICompanyPresenter';
import { IWork } from './../../@models/IWork';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-company-complete-profile',
  templateUrl: './company-complete-profile.component.html',
  styleUrls: ['./company-complete-profile.component.scss'],
})
export class CompanyCompleteProfileComponent implements OnInit {
  subServices = new FormControl();
  selectedsubServices: any = [];
  ospprofileSubServices: any = [];

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
  /*   selectedSubServices: any = []; */
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

  work: any = {} as IWork;
  workId: any = 0;
  workImages: any = [];
  AllProjectCategory: any = [];
  allServiceProviderWorks: any = [];

  constructor(
    private fb: FormBuilder,
    private serviceProviderService: ServiceProviderService,
    private provider: ProviderServiceService,
    private _toastr: ToastrService,
    private client: ClientService,
    private router: Router,
    private SignalrService: SignalrService
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
      companyRegisterationEndDate: ['', [Validators.required]],
      companyRegisterationStartDate: ['', [Validators.required]],
      license: ['', [Validators.required]],
      companyLogo: ['', [Validators.required]],

      projectCategoryId: ['', [Validators.required]],
      projectName: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      projectPrice: ['', [Validators.required]],
      completionYear: [
        '',
        [Validators.required, Validators.pattern('^0*([1-9]|[0-9]{2}|100)$')],
      ],
      images: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.comUsername = localStorage.getItem('name')?.replace(/"/g, '') || '';
    this.comEmail = localStorage.getItem('email')?.replace(/"/g, '') || '';
    this.comPhoneNumber =
      localStorage.getItem('phoneNumber')?.replace(/"/g, '') || '';

    this.provider.getRegions().subscribe((data: any) => {
      this.regionsList = data.data;
    });
    this.client.getProjectServicesAndSubService().subscribe((data: any) => {
      this.allProjectService = data.data.projectServices;
    });
    /* check complete profie or not */
    this.client.checkStatus().subscribe((data: any) => {
      this.isComplete = data.data.profileAccepted;

      this.isCreated = data.data.profileCreated;
    });
    this.serviceProviderService
      .getAllProjectCategory()
      .subscribe((data: any) => {
        this.AllProjectCategory = data.data;
      });
    this.getServiceProviderWorks();
  }
  getServiceProviderWorks() {
    this.serviceProviderService
      .getServiceProviderWorks()
      .subscribe((data: any) => {
        this.allServiceProviderWorks = data.data;
      });
  }
  deleteThisWork(workId: any) {
    this.serviceProviderService.deleteServiceProviderWork(workId).subscribe({
      next: (response: any) => {
        this._toastr.info(response.message);
        this.getServiceProviderWorks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  _getSubServices() {
    this.selectedServices = this.projectServiceId?.value;
    this.serviceProviderService
      .getProjectSubServicesByServiceId(this.selectedServices)
      .subscribe((data: any) => {
        this.allProjectSubService = data.data;
      });
  }

  onImageUpload(event: any, name: any) {
    if (event.target.files.length > 0) {
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
  get companyRegisterationStartDate() {
    return this.completeCampanyProfileForm.get('companyRegisterationStartDate');
  }
  get companyRegisterationEndDate() {
    return this.completeCampanyProfileForm.get('companyRegisterationEndDate');
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

  get projectCategoryId() {
    return this.completeCampanyProfileForm.get('projectCategoryId');
  }
  get projectName() {
    return this.completeCampanyProfileForm.get('projectName');
  }
  get ownerName() {
    return this.completeCampanyProfileForm.get('ownerName');
  }
  get projectPrice() {
    return this.completeCampanyProfileForm.get('projectPrice');
  }

  get completionYear() {
    return this.completeCampanyProfileForm.get('completionYear');
  }
  get images() {
    return this.completeCampanyProfileForm.get('images');
  }
  onMultiImageUpload(event: any) {
    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file) => {
        this.workImages.push(file);
      });
    }
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
    this.selectedsubServices.map((sub: any) => {
      this.ospprofileSubServices.push({
        projectServiceId: this.projectServiceId?.value,
        projectSubServiceId: sub,
      });
    });

    this.companyUser.companyName = this.companyName?.value;
    this.companyUser.officePhoneNumber = this.officePhoneNumber?.value;
    this.companyUser.websiteLink = this.websiteLink?.value;
    this.companyUser.projectServiceId = this.projectServiceId?.value;
    this.companyUser.additionalNumber = this.additionalNumber?.value;
    this.companyUser.buildingNumber = this.buildingNumber?.value;
    this.companyUser.districtId = this.districtId?.value;
    this.companyUser.postalCode = this.postalCode?.value;
    this.companyUser.streetName = this.streetName?.value;

    this.companyUser.companyClassificationId = 0;
    this.companyUser.ospprofileSubServices = this.ospprofileSubServices;
    this.companyUser.companyRegisterationNumber =
      this.companyRegisterationNumber?.value;
    this.companyUser.licenseNumber = this.licenseNumber?.value;
    this.companyUser.licenseStartDate = new Date(this.licenseStartDate?.value);
    this.companyUser.licenseEndDate = this.licenseEndDate?.value;

    this.companyPresenter.email = this.email?.value;
    this.companyPresenter.firstName = this.firstName?.value;
    this.companyPresenter.lastName = this.lastName?.value;
    this.companyPresenter.phoneNumber = this.phoneNumber?.value;

    if (this.selectedsubServices.length > 0) {
      this.serviceProviderService
        .storeOrganizationalProfile(this.companyUser)
        .subscribe({
          next: (response: any) => {
            console.log('companyUser');
            this.serviceProviderService
              .storeReprasintative(this.companyPresenter)
              .subscribe({
                next: (response: any) => {
                  console.log('companyPresenter');
                  this.serviceProviderService
                    .storeCompanyProfileFiles(this.filesFormData)
                    .subscribe({
                      next: (response: any) => {
                        console.log('files Sent');
                        this.prevWorksFormSubmit();
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
      alert('?????? ???????????? ?????? ?????????? ?????? ???????? ???? ??????????????');
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
  _getDistricts() {
    this.selectCity = this.completeCampanyProfileForm?.get('city')?.value;
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
  prevWorksFormSubmit() {
    let filesFormDta = new FormData();
    this.workImages.map((file: any) => {
      filesFormDta.append('file', file);
    });

    this.work.projectCategoryId = this.projectCategoryId?.value;
    this.work.projectName = this.projectName?.value;
    this.work.ownerName = this.ownerName?.value;
    this.work.projectPrice = this.projectPrice?.value;
    this.work.completionYear = this.completionYear?.value;
    this.work.identifier = '1';
    delete this.work.images;
    if (localStorage.getItem('type') == '"CO"') {
      /* send work */
      this.serviceProviderService
        .storeOrganizationalServiceProviderWork(this.work)
        .subscribe({
          next: (response: any) => {
            console.log('work Posted');
            this._toastr.info(response.message);
            this.workId = response.data.id;

            /* send files */
            this.serviceProviderService
              .storeOrganizationalServiceProviderWorkFilesByWorkId(
                filesFormDta,
                this.workId
              )
              .subscribe({
                next: (response: any) => {
                  console.log('Image Posted');
                  this.router.navigate(['/Spmanagement/prevWorks']);
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
      /* send work */
      this.serviceProviderService
        .storeIndividualServiceProviderWork(this.work)
        .subscribe({
          next: (response: any) => {
            console.log('work Posted');
            this.workId = response.data.id;
            /* send files */
            this.serviceProviderService
              .storeIndividualServiceProviderWorkFilesByWorkId(
                filesFormDta,
                this.workId
              )
              .subscribe({
                next: (response: any) => {
                  console.log('Image Posted');
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
    }
  }

  /* ********************** */
}
