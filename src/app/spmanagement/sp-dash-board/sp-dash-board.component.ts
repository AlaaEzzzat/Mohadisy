import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';
import { ClientService } from './../../@core/services/client/client.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-sp-dash-board',
  templateUrl: './sp-dash-board.component.html',
  styleUrls: ['./sp-dash-board.component.scss']
})
export class SpDashBoardComponent implements OnInit {
  data:any={};
  completedProjects: any = [];
  selected: Date = new Date();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  currentProjects: any = [];
  totalProjects: any;
  completedProjectsCost:any=0;
  currentProjectsCost:any=0;
  testimonials:any=[];
    constructor(private _api: ApiService, private adminDashService: AdminDashService, private clientService: ClientService) {}

  ngOnInit(): void {
    this.adminDashService.getServiceProviderStatus().subscribe((data) => {
        this.data = data.data;
        console.log(data.data)
       this.currentProjects = this.data.spProjects.currentProjects;
       this.currentProjects.length >0 ?this.currentProjects.map((project:any)=>{
          this.currentProjectsCost += project.offers[0].totalCost; 
          if(project.offers.length>0){
            this.getOfferSender(project);
          }
        }):"";
        this.completedProjects = this.data.spProjects.completedProjects;
        this.completedProjects.length >0 ?this.completedProjects.map((project:any)=>{
          if(project.offers.length>0){
            this.completedProjectsCost += project.offers[0].totalCost; 
            this.getOfferSender(project);
          }
        }):'';
this.testimonials=this.data.testimonials
        console.log(this.currentProjects)
        console.log(this.completedProjects) 
        this.renderDouChart();
      });
  }
   getOfferSender(project:any){
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
        labels: ['مشروع','معلق', ' متأخر', 'مكتمل ', 'حالي  '],
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
            backgroundColor: ['#FF6384',"#004057", '#4BC0C0', '#FFCE56', '#2696C8'],
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
