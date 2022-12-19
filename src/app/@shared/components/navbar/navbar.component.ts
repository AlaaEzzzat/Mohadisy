import { UserserviceService } from 'src/app/@core/http/userservice.service';
import { ClientService } from './../../../@core/services/client/client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  status: boolean = false;
  userType:any;
  username: string = localStorage.getItem('name')?.replace(/"/g, '') || '';
  constructor(private router: Router, private clientService: ClientService, private userserviceService:UserserviceService) {
    
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }
  showNotificationDiv: boolean = false;
  showNotification() {
    this.showNotificationDiv = !this.showNotificationDiv;
  }
  showSubMenu() {}
  search() {}
  clickEvent() {
    this.status = !this.status;
  }
  profile() {
    if (localStorage.getItem('role') == '"Client"') {
      this.router.navigate(['usermanagement/profile']);
    } else {
      this.router.navigate(['Spmanagement/profile']);
    }
  }

  notifications: any = [];
  userprofile:any={};
  ngOnInit(): void {
    if(localStorage.getItem('role') == '"Client"'){
      this.userType = 'Client'
      console.log("cl")
       }else if(localStorage.getItem('type') =='"CO"'){
        this.userType = 'CO'
      console.log("co")
       }else if(localStorage.getItem('role') == '"Admin"'){
        this.userType = 'Admin'
        console.log("admin")
       }else if(localStorage.getItem('type') =='"IND"'){
        this.userType = 'SP'
      console.log("sp")

       }
    if(localStorage.getItem('role') == '"Client"'){
   this.userserviceService.getClientProfile().subscribe((profile: any) => {
    this.userprofile = profile.data;
    console.log(this.userprofile)
   })
    }else if(localStorage.getItem('type') =='"CO"'){
      this.userserviceService.getOrganizationalServiceProviderProfile().subscribe((profile: any) => {
        this.userprofile = profile.data;
        console.log(this.userprofile)
       })
      }else if(localStorage.getItem('role') == '"Admin"'){
      this.userserviceService.getAdminProfile().subscribe((profile: any) => {
        this.userprofile = profile.data;
        console.log(this.userprofile)
       })

    }
    else if(localStorage.getItem('type') =='"IND"') {
      this.userserviceService.getIndividualServiceProviderProfile().subscribe((profile: any) => {
        this.userprofile = profile.data;
        console.log(this.userprofile)
       })
    }
    this.getUserNotifications(true);
    console.log(this.userprofile)
  }
  getUserNotifications(status: boolean) {
    this.clientService.getUserNotifications(status).subscribe((data) => {
      this.notifications = data.data;
    });
  }
  markAsRead(id: any) {
    this.clientService.readNotification(id).subscribe({
      next: (response: any) => {
        this.getUserNotifications(true);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
