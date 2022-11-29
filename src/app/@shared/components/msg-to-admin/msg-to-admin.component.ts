import { Router } from '@angular/router';
import { ChatService } from './../../../@core/services/chat/chat.service';
import { IMessage } from './../../../@models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-to-admin',
  templateUrl: './msg-to-admin.component.html',
  styleUrls: ['./msg-to-admin.component.scss']
})
export class MsgToAdminComponent implements OnInit {
  startChatwithAdmin:boolean = false;
  message:IMessage = {} as IMessage;
  constructor( private chatService: ChatService,   private router: Router) { }

  ngOnInit(): void {
  }
  fileMessage:any = '';
  onFileUpload(event: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.fileMessage = myfile;
      console.log(this.fileMessage)
      console.log(this.fileMessage.name)
    }
  }
  sendMessage(message: string) {
    var receiverId = "1b146acc-ebff-4c65-9edf-64d5f046d8a3";
    var type:number=1;
    this.message.content = message;
    this.message.messageTypeId = type;
    this.message.receiverId = receiverId;
    this.sendMessageToEndPoint(this.message,receiverId);
    if(this.fileMessage){
      type=2;
    this.message.content = this.fileMessage;
    this.message.messageTypeId = type;
    this.message.receiverId = receiverId;
      this.sendMessageToEndPoint(this.fileMessage,receiverId);
    }
  }
  sendMessageToEndPoint(message:any,receiverId:any){
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        console.log(data);
        this.startChatwithAdmin = false;
        if(localStorage.getItem("role") == '"Service provider"'){
          this.router.navigate(['/Spmanagement/chat']);
        }else if(localStorage.getItem("role") =='"Client"'){
          this.router.navigate(['/usermanagement/chat']);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
