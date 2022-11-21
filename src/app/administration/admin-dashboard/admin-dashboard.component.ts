import { Component, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { ProfileData } from 'src/app/@models/profile-data';
Chart.register(...registerables);
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { first, of, range, take } from 'rxjs';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  cLientsNumber: number;
  indServiceProviderNumber: number;
  orgServiceProviderNumber: number;
  visitorsNumber: number;
error:any;
  usersNumber: number;
  projectsNumber: number;
  projectsCost: number;
  pricequotesNumber: number;
  pricequotesCost: number;
  earnings: number;
  costs: number;
  data: any;
  period: any;
  cost: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  values = 50;
  selected: any;
  chart: any;
  testimonials:any;
  objectTestimonials:any[]=[]
  star:any[]=[]
  page:any=1
  latestProjects:any
   objectLatest: any[] =[]
   currentProjects:any;
   objectCurrentProjects:any[]=[]
   complaints:any[]=[]
  constructor(private http: AdminDashService) {
    this.cLientsNumber = 0;
    this.indServiceProviderNumber = 0;
    this.orgServiceProviderNumber = 0;
    this.visitorsNumber = 0;
    this.usersNumber = 0;
    this.projectsNumber = 0;
    this.projectsCost = 0;
    this.pricequotesNumber = 0;
    this.pricequotesCost = 0;
    this.earnings = 0;
    this.costs = 0;
  }
  ngOnInit() {
    this.currentProjectsForAdmin();
    this.http.adminDashboard().subscribe({
      next: (value) => {
        // console.log(value.data.testimonials);
        this.data = value.data;
        this.cLientsNumber = value.data.users.cLientsNumber;
        this.indServiceProviderNumber =
          value.data.users.indServiceProviderNumber;
        this.orgServiceProviderNumber =
          value.data.users.orgServiceProviderNumber;
        this.visitorsNumber = value.data.overview.visitorsNumber;
        this.usersNumber = value.data.overview.usersNumber;
        this.projectsNumber = value.data.overview.projectsNumber;
        this.projectsCost = value.data.overview.projectsCost;
        this.pricequotesNumber = value.data.overview.pricequotesNumber;
        this.pricequotesCost = value.data.overview.pricequotesCost;
        this.earnings = value.data.overview.earnings;
        this.costs = value.data.overview.costs;
        this.chart = value.data.adminChart;

        this.testimonials =value.data.testimonials
        this.complaints=value.data.complaints
        this.renderDouChart();
        this.renderBarChart();
        // for(let oneTestimonials of this.testimonials){
        //   this.objectTestimonials.push(oneTestimonials)
        // }          console.log(this.objectTestimonials)

        
      },
    });

  }
 currentProjectsForAdmin(){

  this.http.getFinishedProjectsForAdmin(1).subscribe({
    next: (value) => {
      console.log(value);
      this. latestProjects=value .data.projects
      for(let x of this. latestProjects){
        if(this.objectLatest.length<5){
          this.objectLatest.push(x)
        }
        console.log(this.objectLatest)

      }
    
    },error:(er)=>{
      // console.log(er)
      this.error=er
    }})

    this.http.getCurrentProjectsForAdmin(1).subscribe({
      next: (value) => {
        console.log(value);
        this. currentProjects=value.data.projects
        for(let x of this. currentProjects){
          if(this.objectCurrentProjects.length<6){
            this.objectCurrentProjects.push(x)
          }
          console.log(this.objectCurrentProjects)
  
        }
      
      }})
  
  }
 
  renderDouChart() {
    const myChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['مشاريع', 'مشاريع معلقه', 'مشاريع تم تنفيده', 'مشاريع حاليه',],
        datasets: [
          {
            label: `# مشروع`,
            data: [
              this.chart.totalProjectsNumber,
              this.chart.pendingProjectsNumber,
              this.chart.finishedProjectsNumber,
              this.chart.currentProjectsNumber,
          
            ],
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#2696C8'],
            borderColor: ['none'],
            borderWidth: 0.01,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });
  }

  renderBarChart() {
    const myChart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: ` مشاريع`,
            borderColor: ['#e55353'],
            backgroundColor: ['#e55353'],
            data: [45, 47, 32, 56, 70, 60, 45, 47, 32, 56, 70, 60],
          },
          {
            label: `صفقات`,
            borderColor: ['#dca239'],
            backgroundColor: ['#dca239'],
            data: [36, 50, 60, 40, 34, 32, 36, 50, 60, 40, 34, 32],
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
}
