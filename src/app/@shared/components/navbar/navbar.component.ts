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
  constructor(private router: Router) {}
  signOut() {
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }
  showNotification() {}
  showSubMenu() {}
  search() {}
  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit(): void {}
}
