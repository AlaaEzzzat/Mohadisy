import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() data = [
    {
  
      title: 'لوحة التحكم ',
      routing: '/usermanagement/dashboard',
      image: 'assets/images/Group.png',
    },
  ];
  @Input() profileAccepted: any;
  constructor(private router: Router, private toaster: ToastrService) {}

  ngOnInit(): void {
    console.log(this.profileAccepted)
  }
  routing(link: any) {
    if (this.profileAccepted=="true" ) {
      console.log(this.profileAccepted)
      this.router.navigate([link]);
    } else {
      this.toaster.info('عفواً يجب ملئ بياناتك و الموافقة علي حسابك أولا ');
    }
  }
}
