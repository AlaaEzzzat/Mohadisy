import { Component, OnInit } from '@angular/core';
import { AdminSettingsService } from 'src/app/@core/services/admin/admin-settings.service';
interface Ichecked{
  "isActive": boolean,
  "userId": string
}
@Component({
  selector: 'app-admin-setting-users',
  templateUrl: './admin-setting-users.component.html',
  styleUrls: ['./admin-setting-users.component.scss']
})
export class AdminSettingUsersComponent implements OnInit {
  state: any = 1;
  datas: any;
  usersActive: IuserAct[] = [];
  usersNotActive: IusersNotAct[] = [];
  datasNotActive: any;
  page:any=1
  checked :any;
  changeStuseAcount !:Ichecked;
  message:any;
  show:boolean=false
  showErr:boolean=false

  constructor( private adminSettingsService: AdminSettingsService,) { }

  ngOnInit(): void {
    this.getActiveUsers();
    this.getNonActiveUsers();
  }
  getActiveUsers() {
    this.adminSettingsService.getActiveUsers().subscribe({
      next: (data) => {
        this.datas = data.data.activeUsers;
        this.usersActive = this.datas;
      },
    });
  }

  getNonActiveUsers() {
    this.adminSettingsService.getNonActiveUsers().subscribe({
      next: (data) => {
        this.datasNotActive = data.data.nonActiveUsers;
        this.usersNotActive = this.datasNotActive;
      },
    });
  }
  changeAccountActivation(id:any,checked:boolean){
    if(checked===false){
      this.changeStuseAcount={
        "isActive": true,
        "userId": id
      }
      this.adminSettingsService.changeAccountActivation(this.changeStuseAcount).subscribe({error:(er)=>{
        this.message=er.message
        this.showErr=true
  
        setInterval(() => {
          this.showErr=false
          }, 5000);
      },
      next:(correct)=>{
      
        this.message=correct.message
        this.show=true

        setInterval(() => {
          this.show=false
          }, 5000);
        this.getActiveUsers();
        this.getNonActiveUsers();

      }
    })
    }else{
      this.changeStuseAcount={
        "isActive": false,
        "userId": id
      }

      this.adminSettingsService.changeAccountActivation(this.changeStuseAcount).subscribe({error:(er)=>{
        
        this.message=er.message
        this.showErr=true
  
        setInterval(() => {
          this.showErr=false
          }, 5000);
      
      },
      next:(correct)=>{
        this.message=correct.message
        this.show=true

        setInterval(() => {
          this.show=false
          }, 1000);        
          this.getActiveUsers();
        this.getNonActiveUsers();

      }
    })
    }
  }
}
interface IuserAct {
  accessFailedCount: 0;
  accountActivationApplicationUserWhoTakeDecision: null;
  accountActivationApplicationUsers: [];
  accountId: 1003;
  accountType: null;
  adminProfile: null;
  applicationRole: {
    isActive: true;
    arabicName: 'مزود خدمة';
    key: 'SP';
    accountTypes: null;
    isAvailableForServiceProviders: true;
  };
  appointments: null;
  clientProfile: null;
  complaints: [];
  concurrencyStamp: 'c21252d2-dacb-4f41-b82a-749b735c467c';
  connectionId: null;
  email: 'osp@mohandisy.com';
  emailConfirmed: true;
  emailVerifyToken: 'a0120749-1a7d-4049-96e9-bf39c9f1e128';
  id: '06f67aef-911b-4a84-a7c4-58b15670eb93';
  individualServiceProviderProfile: null;
  isActive: true;
  lockoutEnabled: true;
  lockoutEnd: null;
  messageReceivers: null;
  messageSenders: null;
  normalizedEmail: 'OSP@MOHANDISY.COM';
  normalizedUserName: 'NEWOSP';
  organizationalServiceProviderProfile: null;
  passResetToken: null;
  passwordHash: 'AQAAAAEAACcQAAAAENW/FfUsvTunxPOBkHVeGNX1eCnMnVR9BzyybKXdFaUqrFv7/8aCsq4L6qm11iGx+g==';
  phoneNumber: '23456734543';
  phoneNumberConfirmed: false;
  roleId: 'e33f6a34-9655-4d3a-8bcd-dc9be0bb84fb';
  roles: null;
  securityStamp: 'DVFZUMJYKJNSMKXNQWDK3MP7BSESHJDP';
  serviceProviderPartnerships: null;
  testimonials: [];
  twoFactorEnabled: false;
  userName: 'newOsp';
}
interface IusersNotAct {
  accessFailedCount: 0;
  accountActivationApplicationUserWhoTakeDecision: null;
  accountActivationApplicationUsers: [];
  accountId: 1003;
  accountType: null;
  adminProfile: null;
  applicationRole: {
    accountTypes: null;
    arabicName: 'مزود خدمة';
    concurrencyStamp: '7a563095-f9e1-409b-a9e9-7922ec5d0b0b';
    id: 'e33f6a34-9655-4d3a-8bcd-dc9be0bb84fb';
    isActive: true;
    isAvailableForServiceProviders: true;
    key: 'SP';
    name: 'Service provider';
    normalizedName: 'SERVICE PROVIDER';
  };
  appointments: null;
  clientProfile: null;
  complaints: [];
  concurrencyStamp: 'c1549d2f-f606-4e3d-b0e0-5b771d1967dd';
  connectionId: null;
  email: 'ws.habeb2@gmail.com';
  emailConfirmed: true;
  emailVerifyToken: '70d8df76-8fb4-4879-9d1b-76455588aebd';
  id: 'ae6caa56-05d8-4267-9140-98b2ef3a67c0';
  individualServiceProviderProfile: null;
  isActive: false;
  lockoutEnabled: true;
  lockoutEnd: null;
  messageReceivers: null;
  messageSenders: null;
  normalizedEmail: 'WS.HABEB2@GMAIL.COM';
  normalizedUserName: 'WESSAM';
  organizationalServiceProviderProfile: null;
  passResetToken: null;
  passwordHash: 'AQAAAAEAACcQAAAAEDG1z11Jk4Ba7CovBdH9DaH98yeY7G6jmyUh9SFdjyQIxnmAa9/U8mz6/cbs9WYcAQ==';
  phoneNumber: '1111111111';
  phoneNumberConfirmed: false;
  roleId: 'e33f6a34-9655-4d3a-8bcd-dc9be0bb84fb';
  roles: null;
  securityStamp: 'CK7SJXZFBTNZCNBNXB73H5OSHNYSZZCJ';
  serviceProviderPartnerships: null;
  testimonials: [];
  twoFactorEnabled: false;
  userName: 'wessam';
}
