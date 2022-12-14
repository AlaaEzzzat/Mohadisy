import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ClientService } from './../../@core/services/client/client.service';
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IadminOfficialUserRegister } from 'src/app/@models/iadmin-official-user-register';
import moment from 'moment';
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
  error: any;
  costs: number = 0;
  data: any;
  period: any;
  cost: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  values = 50;
  selected: any = new Date();
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
   percentage:any=new Set()
   milestonesData:any[]=[];
   test:any=0
   iProfileAdmin: any | undefined = undefined;
   arrays:any[]=[]
   choseAcountType:AccountType[]=[];
   newAccountform: FormGroup;
   userdata:any
   iadminOfficialUserRegister!:IadminOfficialUserRegister
   admins:any[]=[]
   appointments:any
   appointmentFiles:any[]=[]
   usernames: string ;
   appointment!:appoint;
   newappointment: FormGroup;
   dateSelected!:dateSe
   FileformData = new FormData();
   file:any;
   dateOpt:any;
   erDateOp:any;
   message:any;
   showSuc:boolean=false
   showErr:boolean=false
  constructor(private http: AdminDashService,private adminSettingsService: AdminSettingsService,private formbuilder: FormBuilder,private clientService: ClientService,
    ) {
    
      this.visitorsNumber = 0;
      this.usernames= localStorage.getItem('name')?.replace(/"/g, '') || '';
      this.newAccountform = this.formbuilder.group({
        username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20),]],
        Password: ['', [Validators.required,Validators.minLength(10),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]], 
        email: ['',[Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        officialRoleId: ['', [Validators.required]]
      });
      this.newappointment=this.formbuilder.group({
        name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),]],
       description: ['', [Validators.required]],
       imageFile: [''],
      });
    }
  // ngOnChanges() {
  //   this.getappointDate()
  // }
  ngOnInit() {

    // this.getappointDate(this.selected)
    this.showUserDashboard()


    // this.getProfileAdmin();
    this.currentProjectsForAdmin();
    this.http.adminDashboard().subscribe({
      next: (value) => {
        console.log(value.data);
        this.data = value.data;
        this.overview = value.data.overview;
        this.pricequotes = value.data.overview.pricequotes;
        this.projects = this.overview.projects;
        this.clients = this.overview.clients;
        this.individualSP = this.overview.individualSP;
        this.organizationalSP = this.overview.organizationalSP;
        this.costs = Math.ceil(this.projects.acceptedProjectsCost * 0.01);
        this.chart = value.data.adminChart;

        this.admins=value.data.officialUsers
        this.testimonials =value.data.testimonials
        this.complaints=value.data.complaints;
        // ?????????? ??????????
        // this.appointments=value.data.appointments.latestAppointment;
      
        // console.log(value.data.appointments.appointments);
        this.admins = value.data.officialUsers;
        this.testimonials = value.data.testimonials;
        this.complaints = value.data.complaints;
        // this.appointments = value.data.appointments.latestAppointment;
        // this.appointmentFiles = this.appointments.appointmentFiles;
        // console.log(this.appointmentFiles);

        this.renderDouChart();
        this.renderBarChart();
        for (let oneTestimonials of this.testimonials) {
          this.objectTestimonials.push(oneTestimonials);
          // console.log(oneTestimonials.stars)
        }
      },
    });
  }
    
  get username() {
    return this.newAccountform?.get('username');
  }
  get officialRoleId() {
    return this.newAccountform?.get('officialRoleId');
  }
  get Password() {
    return this.newAccountform?.get('Password');
  }
  get email() {
    return this.newAccountform?.get('email');
  }
  get phoneNumber() {
    return this.newAccountform?.get('phoneNumber');
  }
  get f() {
    return this.newAccountform.controls;
  }
  get name() {
    return this.newappointment?.get('name');
  }
  get description() {
    return this.newappointment?.get('description');
  }
  get appoins() {
    return this.newappointment.controls;
  }
  get imageFile(){
    return this.newappointment?.get('imageFile');

  }

  currentProjectsForAdmin() {
    let i = 0;
    this.http.getFinishedProjectsForAdmin(1).subscribe({
      next: (value) => {
        this.error = null;
        this.latestProjects = value.data.projects;
        console.log(this.latestProjects)
        this.latestProjects.map((project: any) => {
          if (project.offers.length > 0) {
            this.getOfferSender(project);
          }
        });
        for (let x of this.latestProjects) {
          if (this.objectLatest.length < 5) {
            this.objectLatest.push(x);
          }
        }
      },
      error: (er) => {
        this.error = er;
      },
    });

    this.http.getCurrentProjectsForAdmin(1).subscribe({
      next: (value) => {
        this.currentProjects = value.data.projects;
        this.currentProjects.map((project: any) => {
          if (project.offers.length > 0) {
            this.getOfferSender(project);
          }
        });
        for (let x of this.currentProjects) {
          if (this.objectCurrentProjects.length < 5) {
            this.objectCurrentProjects.push(x);
          }
        }
        for (let item of this.objectCurrentProjects) {
          if (item.offers.length > 0) {
            for (let id of item.offers) {
              this.http.getMilestonesByOfferId(id.id).subscribe({
                error: (er) => {
                  // console.log(er);
                },
                next: (data) => {
                  this.milestonesData = data.data;
                  // console.log(this.milestonesData)
                  this.test = 0;
                  for (let miles of this.milestonesData) {

                    if (miles.isPaid) {
                      this.test += miles.percentage;
                    }
                  }
                },
              });
            }
          } else {
            let notOffer = '???????????? ?????? ??????';
          }
        }
      },
    });
  }

//  showUserDashboard(){
//   this.http.getUsersDashboard().subscribe({next:(data)=>{
//     this.admins=data.data.activatedUsers
//     console.log(this.admins)

//   },error:(er)=>{
//     alert(er.message)
//   }})
//  }


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
      labels: ['????????????', '???????????? ??????????', '???????????? ???? ????????????', '???????????? ??????????'],
      datasets: [
        {
          label: `# ??????????`,
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

// fortest(totals: any) {
//   for (var i = 1; i <= totals; i++) {
//     this.arrays.push(i);
//     console.log(this.arrays);
//   }
// }
// getappointDate(selected:any) {
//  let date=moment(selected).utc().format('YYYY-MM-DD h:mm A')
//   let dateSelected={
    
//       "startDate": date,
//       "endDate": date
//     } 
//     console.log(dateSelected);
//     this.http.appointmentsEndAndStartDte(dateSelected).subscribe({next:(date=>{
//       console.log(date.data);
     
//       for(let dates of date.data){
//         this.dateOpt=dates

//       }
//       console.log(this.dateOpt)
//       this.appointmentFiles=this.dateOpt.appointmentFiles
//     }),error:(er=>{
//       console.log(er)
//       this.dateOpt=null
//       this.erDateOp=er
//     })})
  
// }
// uplaodFile(e: any) {

//   if (e.target.files && e.target.files.length > 0) {
//     this.file = e.target.files[0];
   
//     this.FileformData.append('file', this.file);
//     console.log(this.FileformData);

//   }      console.log(this.file);

// }
// creatMeeting() {
    
//   let date=moment(this.selected).utc().format('YYYY-MMM-DD h:mm A');
//     this.adminSettingsService.getAdminProfile().subscribe((value) => {
//       this.iProfileAdmin = value.data.adminProfile.applicationUserId;
//       console.log
//     });
//     this.appointment={
//       "applicationUserId": this.iProfileAdmin,
//       "name": this.name?.value,
//       "description": this.description?.value,
//       "dateCreated": date
//     }
//     this.http.storeAppointment(this.appointment).subscribe({next:((data)=>{
//       console.log(data)
//       console.log(data.data.appointmentId)
//       this.http.storeAppointmentFiles(data.data.appointmentId,this.file).subscribe({next:(req)=>{
//         console.log(req.message)
//       },error:(er)=>{
//         console.log(er.message)

//       }})
//     }),error:(er)=>{
//       console.log(er.message)
//     }})
//     console.log(this.appointment);
//   }
  
// creatMeeting() {
//   this.iProfileAdmin=localStorage.getItem('id')
//   console.log(this.iProfileAdmin)
//   let date=moment(this.selected).utc().format('YYYY-MMM-DD h:mm A');
  
//     this.appointment={
//       "applicationUserId": this.iProfileAdmin,
//       "name": this.name?.value,
//       "description": this.description?.value,
//       "dateCreated": date
//     }
//     this.http.storeAppointment(this.appointment).subscribe({next:((data)=>{
//       console.log(data)
//       console.log(data.data.id)
//       this.http.storeAppointmentFiles(data.data.id,this.FileformData).subscribe({next:(req)=>{
//         console.log(req)
//       },error:(er)=>{
//         console.log(er)

//       }})
//     }),error:(er)=>{
//       console.log(er)
//     }})
//     console.log(this.appointment);
   
//   }
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
            label: ` ????????????`,
            borderColor: ['#e55353'],
            backgroundColor: ['#e55353'],
            data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 5, 0],
          },
          {
            label: `???????? ??????????????`,
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
  chiseOfficialRoles() {
    this.iadminOfficialUserRegister;
    this.http.getOfficialRoles().subscribe({
      next: (roles) => {
        console.log(roles.data);
        this.userdata = roles.data;
      },
    });
  }
 showUserDashboard() {
  this.http.getUsersDashboard().subscribe({
    next: (data) => {
      this.admins = data.data.activatedUsers;
      console.log(this.admins);
    },
    error: (er) => {
      alert(er.message);
    },
  });
}

 


  addAccount() {
    this.iadminOfficialUserRegister = {
      userName: this.username?.value,
      email: this.email?.value,
      Password: this.Password?.value,
      phoneNumber: this.phoneNumber?.value,
      officialRoleId: this.officialRoleId?.value,
    };
    console.log(this.iadminOfficialUserRegister);
    this.http.officialUserRegister(this.iadminOfficialUserRegister).subscribe({
      next: (va) => {
        // alert(va.message);
        this.message=va.message
        this.showSuc=true
  
        setInterval(() => {
          this.showSuc=false
          }, 3000);

      },
      error: (er) => {
        this.message=er
        this.showErr=true
  
        setInterval(() => {
          this.showErr=false
          }, 5000);
      },
    });
  }



}



interface offers {
  id: 2163;
  offerId: 92;
  cost: 5.0;
  percentage: 25.0;
  isFirstMilestone: true;
  requiredWorkId: 1;
  isLastMilestone: false;
  milestoneStatusId: 2;
  isPaid: true;
  paidDate: '2022-10-17T12:18:00';
  requiredWork: null;
  milestoneStatus: {
    id: 2;
    nameAr: '???????? ??????????';
    nameEn: 'CurrentWork';
    milestones: [];
  };
  offer: null;
}
// interface AccountType{
//   "isActive": false,
//   "arabicName": string,
//   "key": string,
//   "accountTypes": any,
//   "isAvailableForServiceProviders": boolean,
//   "id": string,
//   "name": string,
//   "normalizedName": string,
//   "concurrencyStamp": string
// }
interface dateSe{
      
  "startDate": string,
  "endDate": string
}

interface AccountType {
  isActive: false;
  arabicName: string;
  key: string;
  accountTypes: any;
  isAvailableForServiceProviders: boolean;
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}
interface appoint{
  "applicationUserId": "1b146acc-ebff-4c65-9edf-64d5f046d8a3",
  "name": "fffff",
  "description": "dpdflkpdlf;",
  "dateCreated": string
}

function getappointDate(selected: any) {
  throw new Error('Function not implemented.');
}
