import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ClientService } from './../../../@core/services/client/client.service';
import { ApiService } from './../../../@core/api.service';
import { ProviderServiceService } from './../../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  project: any = {};
  serviceId: any;
  priceoffer!: FormGroup;
  endDate: Date = new Date();
  projectAllCategory: any = [];
  projectAllSubCategory: any = [];
  AllProjectComponent: any = [];
  ProjectSelectedComponent: any = [];
  ProjectRequiredWorks: any = [];
  selectedCategory: any = 0;
  districtsList: any = [];
  citiesList: any = [];
  regionsList: any = [];
  addingDistrict: boolean = false;
  selectRegion: any = 0;
  selectCity: any = 0;
  activeWork: any = {};
  addedWorks: any = [];
  addedComponents: any = [];
  Section: any = 'one';

  constructor(
    private fb: FormBuilder,
    private provider: ProviderServiceService,
    private apiService: ApiService,
    private clientService: ClientService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.serviceId = this.clientService.requestedServiceId;

    this.priceoffer = this.fb.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      pricequoteEndDate: ['', [Validators.required]],
      projectCategoryId: ['', [Validators.required]],
      projectSubCategoryId: [''],
      requiredWorksNotes: [''],
      districtId: ['', [Validators.required]],
      plotNumber: ['', [Validators.required]],
      organizationalChartNumber: ['', [Validators.required]],
      area: ['', [Validators.required]],
      componentIds: this.fb.array([]),
      requiredWorkIds: this.fb.array([]),
    });
  }
  get f() {
    return this.priceoffer.controls;
  }
  get name() {
    return this.priceoffer.get('name');
  }
  get subject() {
    return this.priceoffer.get('subject');
  }
  get pricequoteEndDate() {
    return this.priceoffer.get('pricequoteEndDate');
  }
  get projectCategoryId() {
    return this.priceoffer.get('projectCategoryId');
  }
  get projectSubCategoryId() {
    return this.priceoffer.get('projectSubCategoryId');
  }
  get districtId() {
    return this.priceoffer.get('districtId');
  }
  get plotNumber() {
    return this.priceoffer.get('plotNumber');
  }
  get organizationalChartNumber() {
    return this.priceoffer.get('organizationalChartNumber');
  }

  get requiredWorkIds() {
    return this.priceoffer.get('requiredWorkIds') as FormArray;
  }
  get area() {
    return this.priceoffer.get('area');
  }

  ngOnInit(): void {
    this.provider.getRegions().subscribe((data: any) => {
      this.regionsList = data.data;
    });
    this.clientService.getAllProjectCategories().subscribe((data: any) => {
      this.projectAllCategory = data.data;
    });
    this.clientService.getAllComponent().subscribe((data: any) => {
      this.AllProjectComponent = data.data;
    });
    this.clientService.getAllReqworks(this.serviceId).subscribe((data: any) => {
      this.ProjectRequiredWorks = data.data;
    });
  }
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  priceofferSubmit() {
    this.project = this.priceoffer.value;
     let date = new Date();
    date.toISOString().split('T')[0];
    date.setDate(
      date.getDate() + Number(this.priceoffer?.get('pricequoteEndDate')?.value)
    ); 
    this.project.pricequoteEndDate =  date
    this.project.projectServiceId = this.serviceId;
    if (this.addedComponents.length == 0) {
      this.toaster.error('مكونات المشروع مطلوبه');
    } else {
      this.addedComponents.map((component: any) => {
        this.project.componentIds.push(component.id);
      });
    }
    if (this.addedWorks.length == 0) {
      this.toaster.error('رجاءاَ إدخال الأعمال المطلوبة ');
    } else {
      this.addedWorks.map((work: any) => {
        this.project.requiredWorkIds.push(work.id);
      });
    }
    this.clientService.reuestedProject = this.project;
    this.clientService
      .storeProject(this.clientService.reuestedProject)
      .subscribe({
        next: (response: any) => {
          this.clientService.reuestedProject = response.data;

          this.clientService
            .getAllRequiredFiles(this.project.requiredWorkIds)
            .subscribe({
              next: (response: any) => {
                this.clientService.projectRequiredFiles = response.data;
                this.router.navigate([
                  'usermanagement/askprice/uploadRequiredFiles',
                ]);
              },
              error: (err: any) => {
                this.router.navigate(['usermanagement/offers']);
              },
            });
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  _getSubCategories() {
    this.projectAllSubCategory = [];
    this.selectedCategory = this.priceoffer?.get('projectCategoryId')?.value;
    if (this.selectedCategory != 0 && this.selectedCategory != null)
      this.clientService.getSubCategories(this.selectedCategory).subscribe(
        (data) => {
          this.projectAllSubCategory = data.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  _getCities(ev: any) {
    this.citiesList = [];
    this.selectRegion = ev.target.value;
    if (this.selectRegion != 0 && this.selectRegion != null)
      this.provider.getCities(this.selectRegion).subscribe(
        (data) => {
          this.citiesList = data.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  _getDistricts(ev: any) {
    this.selectCity = ev.target.value;
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
      if (region.id == this.selectRegion) {
        return region;
      }
    });
    let city = this.citiesList.find((city: any) => {
      if (city.id == this.selectCity) {
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
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  chooseWork(work: any) {
    this.activeWork = work;
  }
  addWork() {
    const index = this.addedWorks.indexOf(this.activeWork);
    if (index == -1) {
      this.addedWorks.push(this.activeWork);
      this.activeWork = {};
    }
  }
  deleteWork() {
    const index = this.addedWorks.indexOf(this.activeWork);
    if (index > -1) {
      this.addedWorks.splice(index, 1);
      this.activeWork = {}; 
    }
  }
  deleteAllWorks() {
    this.addedWorks = [];
  }
  addComponent(component: any) {
    const index = this.addedComponents.indexOf(component);
    if (index == -1) {
      this.addedComponents.push(component);
    }
  }
  deleteComponent(component: any) {
    const index = this.addedComponents.indexOf(component);
    this.addedComponents.splice(index, 1);
  }
}
