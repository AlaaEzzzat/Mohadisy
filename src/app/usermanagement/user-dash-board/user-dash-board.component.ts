import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/@models/profile-data';

import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.scss'],
})
export class UserDashBoardComponent implements OnInit {
  data: ProfileData = {} as ProfileData;
  completedProjects: any = [];
  currentProjects: any = [];
  totalProjects: any;

  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this._api
      .get('https://app.mohandisy.com/api/Dashboard/getClientStatus')
      .subscribe((data) => {
        this.data = data.data;
        this.currentProjects = this.data.currentProjects;
        this.renderDouChart();
        this.renderBarChart();
      });
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
              this.data?.projectsChart?.totalProjectsNumber,
              this.data?.projectsChart?.currentPriceQuotesNumber,
              this.data?.projectsChart?.completedProjectsNumber,
              this.data?.projectsChart?.currentProjectsNumber,
            ],
            backgroundColor: ['#568fc1', '#02203e', '#05cb42', '#17a785'],
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
