import { IEmployee } from './../../@core/utils/iemployee';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';
import { ClientService } from './../../@core/services/client/client.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Chart, registerables } from 'node_modules/chart.js';
import { ToastrService } from 'ngx-toastr';
Chart.register(...registerables);
@Component({
  selector: 'app-sp-dash-board',
  templateUrl: './sp-dash-board.component.html',
  styleUrls: ['./sp-dash-board.component.scss'],
})
export class SpDashBoardComponent implements OnInit {
  data: any = {};
  ospProfile: any = {};
  employee: IEmployee = {} as IEmployee;
  completedProjects: any = [];
  selected: Date = new Date();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  currentProjects: any = [];
  totalProjects: any;
  completedProjectsCost: any = 0;
  currentProjectsCost: any = 0;
  testimonials: any = [];
  addEmployeeForm!: FormGroup;
  constructor(
    private _api: ApiService,
    private adminDashService: AdminDashService,
    private clientService: ClientService,
    private fb: FormBuilder,
    private toaser: ToastrService
  ) {
    this.addEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      employeeLevelId: ['', [Validators.required]],
    });
  }
  isCoProvider:boolean=false
  ngOnInit(): void {
    if(localStorage.getItem('type')=='"CO"'){
      this.isCoProvider=true;
      this.getEmployeeLevelsFun();
      this.getEmployeesFun();
    }else{
      this.isCoProvider=false;
    }
    this.adminDashService.getProfile().subscribe((profile: any) => {
      console.log(profile.data);
      this.ospProfile = profile.data.organizationalServiceProviderProfile;
    });
    this.adminDashService.getServiceProviderStatus().subscribe((data) => {
      this.data = data.data;
      this.currentProjects = this.data.spProjects.currentProjects;
      this.currentProjects.length > 0
        ? this.currentProjects.map((project: any) => {
            this.currentProjectsCost += project?.offers[0]?.totalCost;
            if (project.offers.length > 0) {
              this.getOfferSender(project);
            }
          })
        : '';
      this.completedProjects = this.data.spProjects.completedProjects;
      this.completedProjects.length > 0
        ? this.completedProjects.map((project: any) => {
            if (project.offers.length > 0) {
              this.completedProjectsCost += project.offers[0].totalCost;
              this.getOfferSender(project);
            }
          })
        : '';
      this.testimonials = this.data.testimonials;
      this.renderDouChart();
    });
  }
  employeeLevels: any = [];
  employees: any = [];
  getEmployeeLevelsFun() {
    this.adminDashService.getEmployeeLevels().subscribe((data: any) => {
      this.employeeLevels = data.data;
      console.log(this.employeeLevels);
    });
  }
  getEmployeesFun() {
    this.adminDashService.getEmployees().subscribe((data: any) => {
      this.employees = data.data;
      console.log(this.employees);
    });
  }
  getOfferSender(project: any) {
    if (project.offers[0]?.individualServiceProviderProfileId) {
      this.clientService
        .getOfferSenderProfile(
          project.offers[0]?.individualServiceProviderProfileId
        )
        .subscribe((data: any) => {
          project.offerSender = data.data;
        });
    } else {
      this.clientService
        .getOfferSenderProfile(
          project.offers[0]?.organizationalServiceProviderProfileId
        )
        .subscribe((data: any) => {
          project.offerSender = data.data;
        });
    }
  }
  renderDouChart() {
    const myChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['مشروع', 'معلق', ' متأخر', 'مكتمل ', 'حالي  '],
        datasets: [
          {
            label: `# مشروع`,
            data: [
              this.data?.projectsChart?.totalProjectsNumber,
              this.data.overview?.projects.pendingProjectsNumber,
              this.data?.projectsChart?.lateProjectsNumber,
              this.data?.projectsChart?.completedProjectsNumber,
              this.data?.projectsChart?.currentProjectsNumber,
            ],
            backgroundColor: [
              '#FF6384',
              '#004057',
              '#4BC0C0',
              '#FFCE56',
              '#2696C8',
            ],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  get f() {
    return this.addEmployeeForm.controls;
  }
  get employeeName() {
    return this.addEmployeeForm.get('name');
  }
  addEmployeeFormSubmit() {
    if(this.method=="إضافة"){
      this.employee = this.addEmployeeForm.value;
      this.employee.employeeLevelId = Number(this.employee.employeeLevelId);
      console.log(this.employee);
      this.adminDashService.storeEmployees(this.employee).subscribe({
        next: (res: any) => {
          this.toaser.info(res.message);
          this.getEmployeesFun();
        },
        error: (err: any) => {
          this.toaser.info(err.message);
        },
      });
    }else{

      this.employee = this.addEmployeeForm.value;
      this.updatedEmployee.employeeLevelId = Number(this.employee.employeeLevelId);
      this.updatedEmployee.name = this.employee.name;
      delete this.updatedEmployee?.employeeLevel
      delete this.updatedEmployee?.organizationalServiceProviderProfile
      console.log(this.updatedEmployee);
      this.adminDashService.updateEmployee(this.updatedEmployee).subscribe({
        next: (res: any) => {
          this.toaser.info(res.message);
          console.log(res)
          this.getEmployeesFun();
        },
        error: (err: any) => {
          this.toaser.info(err.message);
        },
      });
    }
  }
  method:any="إضافة"
  updatedEmployee:any={};
  editEmployee(employee:any) {
    this.updatedEmployee = employee;
    this.method = "تعديل";
    this.addEmployeeForm.setValue({
      name: employee.name,
      employeeLevelId: employee.employeeLevelId
    });
  }
  deleteEmployee(id: any) {
    this.adminDashService.deleteEmployee(id).subscribe({
      next: (res: any) => {
        this.toaser.info(res.message);
        this.getEmployeesFun();
      },
      error: (err: any) => {
        this.toaser.info(err.message);
      },
    });
  }
}
