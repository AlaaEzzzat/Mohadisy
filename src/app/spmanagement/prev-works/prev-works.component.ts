import { FunctionsService } from './../../@core/services/functions/functions.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-prev-works',
  templateUrl: './prev-works.component.html',
  styleUrls: ['./prev-works.component.scss'],
})
export class PrevWorksComponent implements OnInit {
  prevWorksForm!: FormGroup;
  work: any = {};
  workId: any = 0;
  workImages: any = [];
  AllProjectCategory: any = [];
  allServiceProviderWorks: any = [];
  showpopup:Boolean=false;
  index:number=0;
  workFile:any;
  constructor(
    private fb: FormBuilder,
    private _toastr: ToastrService,
    private serviceProviderService: ServiceProviderService,
    private api:ApiService,
    private functionsService:FunctionsService
  ) {
    this.prevWorksForm = this.fb.group({
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

  prevWorksFormSubmit() {
    let filesFormDta = new FormData();
    this.workImages.map((file: any) => {
      filesFormDta.append('file', file);
    });

    this.work = this.prevWorksForm.value;
    this.work.identifier = '1';
    delete this.work.images;
    if(this.method=='store'){
      if (localStorage.getItem('type') == '"CO"') {
        this.serviceProviderService
          .storeOrganizationalServiceProviderWork(this.work)
          .subscribe({
            next: (response: any) => {
              console.log('work Posted');
              this._toastr.info(response.message);
              this.workId = response.data.id;
              this.serviceProviderService
                .storeOrganizationalServiceProviderWorkFilesByWorkId(
                  filesFormDta,
                  this.workId
                )
                .subscribe({
                  next: (response: any) => {
                    console.log('Image Posted');
                    this.getServiceProviderWorks();
                    this.prevWorksForm.reset();
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
        this.serviceProviderService
          .storeIndividualServiceProviderWork(this.work)
          .subscribe({
            next: (response: any) => {
              console.log('work Posted');
              this.workId = response.data.id;
              this.serviceProviderService
                .storeIndividualServiceProviderWorkFilesByWorkId(
                  filesFormDta,
                  this.workId
                )
                .subscribe({
                  next: (response: any) => {
                    console.log('Image Posted');
                    this.getServiceProviderWorks();
                    this.prevWorksForm.reset();
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
    }else{

    }
  }
  ngOnInit(): void {
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
  numberOnly(event: any): boolean {
    return this.functionsService.numberOnly(event);
  }

  chareacterOnly(event: any): boolean {
    return this.functionsService.chareacterOnly(event);
  }

  onImageUpload(event: any) {
    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file) => {
        this.workImages.push(file);
      });
    }
  }
  deleteThisWork(workId: any) {
    this.serviceProviderService.deleteServiceProviderWork(workId).subscribe({
      next: (response: any) => {
        this._toastr.info(response.message);
        console.log('work deleted');
        this.getServiceProviderWorks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }


  activeSlider:any;
  projectImage(workId:any)
  {
    this.activeSlider =true;
    this.api.get(`https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorkFilesByWorkId/${workId}`).subscribe(data=>
    {
      this.workFile=data.data;
    });
  }
  get f() {
    return this.prevWorksForm.controls;
  }
  get projectCategoryId() {
    return this.prevWorksForm.get('projectCategoryId');
  }
  get projectName() {
    return this.prevWorksForm.get('projectName');
  }
  get ownerName() {
    return this.prevWorksForm.get('ownerName');
  }
  get projectPrice() {
    return this.prevWorksForm.get('projectPrice');
  }

  get completionYear() {
    return this.prevWorksForm.get('completionYear');
  }
  get images() {
    return this.prevWorksForm.get('images');
  }
  method:any;
  updateWork(work:any){
    console.log(work)
    this.method ='update'
    this.prevWorksForm.patchValue(work)

  }
}
