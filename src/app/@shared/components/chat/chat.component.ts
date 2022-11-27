import { ProviderServiceService } from './../../../@core/services/Provider/provider-service.service';
import { IMessage } from '../../../@models/message';
import { ChatService } from '../../../@core/services/chat/chat.service';
import { ClientService } from '../../../@core/services/client/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  activeChat: boolean = false;
  message:IMessage = {} as IMessage;
  constructor(
    private clientService: ClientService,
    private providerService: ProviderServiceService,
    private chatService: ChatService
  ) {}
  clientProfile: any = {};
  userCahts: any = [];
  messageTypes: any = [];
  userType:any=""
  ngOnInit(): void {
    if(localStorage.getItem('role') == '"Client"'){
      this.clientService.getClientProfile().subscribe((data: any) => {
        this.clientProfile = data.data;
        this.userType = "Client";
        console.log(data.data);
        console.log(this.userType)
      });
     }else if(localStorage.getItem('type') == '"CO"') {
      this.providerService.getR().subscribe((data: any) => {
        console.log(data.data);
        this.userType = "CO";
        this.clientProfile = data.data;
        console.log(this.userType)
        console.log()
      });
     }
    this.chatService.getUserChats().subscribe((data: any) => {
      console.log(data.data);
      this.userCahts = data.data;
    });

    this.chatService.getMessageTypes().subscribe((data: any) => {
      console.log(data.data);
      this.messageTypes = data.data;
    });
  }

  activeUser: any = 0;
  activeChatUserChat: any = [];
  activeUserId:any="";
  showMessage(user: any) {
    this.activeUser = user;
    this.activeUserId = user.id;
    this.getChatWithUser(user.id);
  }
  getChatWithUser(userId:any){
    this.chatService.getChatWithUser(userId).subscribe((data: any) => {
      this.activeChatUserChat = data.data;
      console.log(this.activeChatUserChat)
    });
  }
  sendMessageToEndPoint(message:any,receiverId:any){
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getChatWithUser(receiverId);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  sendMessage(message: string, receiverId:string) {
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

  fileMessage:any = '';
  onFileUpload(event: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.fileMessage = myfile;
      console.log(this.fileMessage)
      console.log(this.fileMessage.name)
    }
  }
}
