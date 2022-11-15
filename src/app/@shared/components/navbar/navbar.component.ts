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
  profile(){
    if(localStorage.getItem('role') == '"Client"'){
      this.router.navigate(["usermanagement/profile"]);
    }else{
      this.router.navigate(["spmanagement/profile"]);

    }

  }
  ngOnInit(): void {}
}
