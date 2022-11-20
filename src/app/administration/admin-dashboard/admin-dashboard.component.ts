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
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  cLientsNumber:number;
  indServiceProviderNumber:number;
  orgServiceProviderNumber:number;
  visitorsNumber:number;
  usersNumber:number;
  projectsNumber:number;
  projectsCost:number;
  pricequotesNumber:number;
  pricequotesCost:number;
  earnings:number;
  costs:number;
  data:any;
  period:any;
  cost:any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  values = 50;
  constructor(private http:AdminDashService) {
    this.cLientsNumber=0
    this.indServiceProviderNumber=0
    this.orgServiceProviderNumber=0
    this.visitorsNumber=0
    this.usersNumber=0
    this.projectsNumber=0
    this.projectsCost=0
    this.pricequotesNumber=0
    this.pricequotesCost=0
    this.earnings=0
    this.costs=0
  }
  ngOnInit() {
    this.http.adminDashboard().subscribe({
      next:((value)=>{
        console.log(value.data)
        this.data = value.data;
        this.cLientsNumber=value.data.users.cLientsNumber
        this.indServiceProviderNumber=value.data.users.indServiceProviderNumber;
        this.orgServiceProviderNumber=value.data.users.orgServiceProviderNumber;
        this.visitorsNumber=value.data.overview.visitorsNumber
        this.usersNumber=value.data.overview.usersNumber
        this.projectsNumber=value.data.overview.projectsNumber
        this.projectsCost=value.data.overview.projectsCost
        this.pricequotesNumber=value.data.overview.pricequotesNumber
        this.pricequotesCost=value.data.overview.pricequotesCost
        this.earnings=value.data.overview.earnings
        this.costs=value.data.overview.costs;
        this.renderDouChart();
        this.renderBarChart()
      })
    })
  }
  renderDouChart() {
    const myChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['مشروع', 'طلبات معلقه', 'تم تنفيده', 'جاري العمل عليه'],
        datasets: [
          {
            label: `# مشروع`,
            data: [
              25,
              25,
              25,
              25,
            ],
            backgroundColor: ['#5B26C8', '#9E26C8', '#029A16', '#2696C8'],
            borderColor: ['none'],
            borderWidth: .01,
            
            
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
           
            
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
            borderColor: ['#48A497'],
            backgroundColor: ['#dca239'],
            data: [45, 47, 32, 56, 70, 60, 45, 47, 32, 56, 70, 60],
          },
          {
            label: `صفقات`,
            borderColor: ['rgba(73,188,170,0.4)'],
            backgroundColor: ['#1d314a'],
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
