import { ToastrService } from 'ngx-toastr';
import { ComplaintService } from './../../../@core/services/complaint/complaint.service';
import { IMessage } from './../../../@models/message';
import { Router } from '@angular/router';
import { ChatService } from './../../../@core/services/chat/chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-chat',
  templateUrl: './start-chat.component.html',
  styleUrls: ['./start-chat.component.scss'],
})
export class StartChatComponent implements OnInit {
  @Input() userType: string = '';
  @Input() receiverId: string = '';
  @Input() process: string = '';
  @Input() toggleStatus: any = () => {};
  startingChat: boolean = true;
  message: IMessage = {} as IMessage;
  constructor(
    private chatService: ChatService,
    private complaintService: ComplaintService,
    private router: Router,
    private _toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  fileMessage: any = '';
  onFileUpload(event: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.fileMessage = myfile;
    }
  }
  sendMessage(message: string) {
    if(message ==''){
      this._toastr.error('نأمل إدخال محتوي للرسالة');
    }else{
      if (this.process == 'chat') {
        if (this.receiverId == '') {
          this.receiverId = '1b146acc-ebff-4c65-9edf-64d5f046d8a3';
        }
        var type: number = 1;
        this.message.content = message;
        this.message.messageTypeId = type;
        this.message.receiverId = this.receiverId;
        this.sendMessageToEndPoint(this.message, this.receiverId);
        if (this.fileMessage) {
          type = 2;
          this.message.content = this.fileMessage;
          this.message.messageTypeId = type;
          this.message.receiverId = this.receiverId;
          this.sendMessageToEndPoint(this.fileMessage, this.receiverId);
        }
      } else if (this.process == 'complaint') {
        this.message.content = message;
        this.message.applicationUserId = this.receiverId;
        this.complaintService.storeComplaint(this.message).subscribe({
          next: (data: any) => {
            this._toastr.info(data.message);
            this.toggleStatus();
          },
          error: (error: any) => {
            console.log(error);
          },
        });
      }
    }
  }
  sendMessageToEndPoint(message: any, receiverId: any) {
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        this.toggleStatus();
        if (this.userType == 'sp') {
          this.router.navigate(['/Spmanagement/chat']);
        } else if (this.userType == 'client') {
          this.router.navigate(['/usermanagement/chat']);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
