import { ClientService } from './../../../@core/services/client/client.service';
import { ComplaintService } from './../../../@core/services/complaint/complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss'],
})
export class ComplaintComponent implements OnInit {
  userRole: any = '';
  constructor(
    private complaintService: ComplaintService,
    private clientService: ClientService
  ) {}
  complaints: any = [];
  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.complaintService.getComplaints().subscribe((data: any) => {
      this.complaints = data.data;
      console.log(this.complaints);
      if (data.data.length > 0) {
        if (localStorage.getItem('role') == '"Service provider"') {
          this.complaintService
            .getAllClientProfiles()
            .subscribe((data: any) => {
              console.log(data);
            });
        }
      }
    });
  }
  startChat: boolean = false;
  recieverId: any = '';
  sendMsg = (receiver: any) => {
    this.recieverId = receiver;
    this.startChat = true;
  };
  toggleStatus = () => {
    this.startChat = false;
  };
}
