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
  username: string = localStorage.getItem('name')?.replace(/"/g, '') || '';
  constructor(private router: Router, private clientService: ClientService) {}
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
      this.router.navigate(['spmanagement/profile']);
    }
  }

  notifications: any = [];
  ngOnInit(): void {
    this.getUserNotifications(true);
  }
  getUserNotifications(status: boolean) {
    this.clientService.getUserNotifications(status).subscribe((data) => {
      console.log(data.data);
      this.notifications = data.data;
    });
  }
  markAsRead(id: any) {
    this.clientService.readNotification(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getUserNotifications(true);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
