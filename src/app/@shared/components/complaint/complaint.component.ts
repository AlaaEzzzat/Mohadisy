import { ComplaintService } from './../../../@core/services/complaint/complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss'],
})
export class ComplaintComponent implements OnInit {
  userRole: any = '';
  constructor(private complaintService: ComplaintService) {}
  complaints: any = [];
  ngOnInit(): void {
    this.userRole = localStorage.getItem('role')?.replace(/"/g, '');
    this.complaintService.getComplaints().subscribe((data: any) => {
      this.complaints = data.data;
      console.log(data.data);
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
