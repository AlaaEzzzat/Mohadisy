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
import { AdminSettingsService } from 'src/app/@core/services/admin/admin-settings.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  clients: any;
  individualSP: any;
  organizationalSP: any;
  visitorsNumber: number;
error:any;
  costs: number=0;
  data: any;
  period: any;
  cost: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  values = 50;
  selected: any=new Date()
  chart: any;
  testimonials:any;
  objectTestimonials:any[]=[]
  star:any[]=[]
  page:any=1
  latestProjects:any
   objectLatest: any[] =[]
   currentProjects:any;
   objectCurrentProjects:any[]=[]
   offersIdCurrentProjects:any
   complaints:any[]=[]
   pricequotes:any;
   projects:any;
   overview:any;
   percentage:any[]=[]
   milestonesData:any[]=[];
   test:any=0
   iProfileAdmin: any | undefined = undefined;

  constructor(private http: AdminDashService,private adminSettingsService: AdminSettingsService) {
    
    this.visitorsNumber = 0;
  }
  ngOnInit() {
    this.getProfileAdmin() 
    this.currentProjectsForAdmin();
    this.http.adminDashboard().subscribe({
      next: (value) => {
        // console.log(value.data);
        this.data = value.data;
        this.overview=value.data.overview
        this.pricequotes= value.data.overview.pricequotes;
        this.projects= this.overview.projects
        this.clients =  this.overview.clients;
        this.individualSP =  this.overview.individualSP;
        this.organizationalSP =this.overview.organizationalSP
        this.costs=Math.ceil(this.projects.acceptedProjectsCost * 0.01)
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
      this.error=null
      // console.log(value);
      this. latestProjects=value .data.projects
      for(let x of this. latestProjects){
        if(this.objectLatest.length<5){
          this.objectLatest.push(x)
        }
        // console.log(this.objectLatest)

      }
    
    },error:(er)=>{
      console.log(er)
      this.error=er
    }})

    this.http.getCurrentProjectsForAdmin(1).subscribe({
      next: (value) => {
       
        this. currentProjects=value.data.projects
        for(let x of this. currentProjects){
          if(this.objectCurrentProjects.length<6){
            this.objectCurrentProjects.push(x)
            
          } 
          // console.log(this.objectCurrentProjects);
         
  
        }
        for(let item of this.objectCurrentProjects){
          if(item.offers.length>0){
            for(let id of item.offers){
              this.http.getMilestonesByOfferId(id.id).subscribe(((data)=>{
                this.milestonesData=data.data
                // console.log(this.milestonesData)
                this.test =0
                for(let miles of this.milestonesData){
                  
                  console.log(miles.isPaid)
                  if(miles.isPaid){
                    this.test += miles.percentage
                    this.percentage.push(this.test)
                  }
                  console.log(this.percentage)

                }

              }))
  
            }
          }else{
            let notOffer ="لايوجد عرض سعر"
            console.log(notOffer)

          }
         
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

  getProfileAdmin() {
    // this.state = 1;
    this.adminSettingsService.getAdminProfile().subscribe((value) => {
      this.iProfileAdmin = value.data;
      console.log(this.iProfileAdmin);
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
            data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 5, 0],
          },
          {
            label: `عروض الاسعار`,
            borderColor: ['#dca239'],
            backgroundColor: ['#dca239'],
            data: [0, 0, 0, 0, 0, 0, 1, 2, 2, 5, 5, 0],
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

interface offers{
  "id": 2163,
  "offerId": 92,
  "cost": 5.0,
  "percentage": 25.0,
  "isFirstMilestone": true,
  "requiredWorkId": 1,
  "isLastMilestone": false,
  "milestoneStatusId": 2,
  "isPaid": true,
  "paidDate": "2022-10-17T12:18:00",
  "requiredWork": null,
  "milestoneStatus": {
      "id": 2,
      "nameAr": "جاري العمل",
      "nameEn": "CurrentWork",
      "milestones": []
  },
  "offer": null
}