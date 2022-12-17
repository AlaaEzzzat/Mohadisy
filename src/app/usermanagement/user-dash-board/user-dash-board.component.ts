import { ClientService } from './../../@core/services/client/client.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from 'src/app/@core/api.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.scss'],
})
export class UserDashBoardComponent implements OnInit {
  data: any = {};
  completedProjects: any = [];
  selected: Date = new Date();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  currentProjects: any = [];
  totalProjects: any;
  completedProjectsCost: any = 0;
  currentProjectsCost: any = 0;
  constructor(private _api: ApiService, private clientService: ClientService) {}
  ngOnInit(): void {
    this._api
      .get('https://app.mohandisy.com/api/Dashboard/getClientStatus')
      .subscribe((data) => {
        this.data = data.data;
        this.currentProjects = this.data.currentProjects;
        this.currentProjects.map((project: any) => {
          this.currentProjectsCost += project.offers[0].totalCost;
          if (project.offers.length > 0) {
            this.getOfferSender(project);
          }
        });
        this.completedProjects = this.data.completedProjects;
        this.completedProjects.map((project: any) => {
          if (project.offers.length > 0) {
            this.completedProjectsCost += project.offers[0].totalCost;
            this.getOfferSender(project);
          }
        });
        this.renderDouChart();
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
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#2696C8'],
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
}
