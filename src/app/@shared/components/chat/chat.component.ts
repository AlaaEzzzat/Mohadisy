import { AdminSettingsService } from './../../../@core/services/admin/admin-settings.service';
import { ScrollToBottomDirective } from './../../directives/scroll-to-bottom';
import { HttpClient } from '@angular/common/http';
import { ProviderServiceService } from './../../../@core/services/Provider/provider-service.service';
import { IMessage } from '../../../@models/message';
import { ChatService } from '../../../@core/services/chat/chat.service';
import { ClientService } from '../../../@core/services/client/client.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  activeChat: boolean = false;
  message: IMessage = {} as IMessage;
  @ViewChild('textInput') textInput!: ElementRef;
  @ViewChild('fileImage') fileImage!: ElementRef;
  @ViewChild(ScrollToBottomDirective) scroll!: ScrollToBottomDirective;

  constructor(
    private clientService: ClientService,
    private providerService: ProviderServiceService,
    private chatService: ChatService,
    private _HttpClient: HttpClient,
    private adminSettingsService: AdminSettingsService
  ) {}
  senderProfile: any = {};
  userCahts: any = [];
  messageTypes: any = [];
  userType: any = '';
  ngOnInit(): void {
    if (localStorage.getItem('role') == '"Client"') {
      this.clientService.getClientProfile().subscribe((data: any) => {
        this.senderProfile = data.data;
        this.userType = 'Client';
        console.log(data.data);
        console.log(this.userType);
      });
    } else if (localStorage.getItem('type') == '"CO"') {
      this.providerService.getR().subscribe((data: any) => {
        console.log(data.data);
        this.userType = 'CO';
        this.senderProfile = data.data;
        console.log(this.userType);
      });
    } else if (localStorage.getItem('role') == '"Admin"') {
      this.adminSettingsService.getAdminProfile().subscribe((data: any) => {
        this.userType = 'Admin';
        this.senderProfile = data.data;
        console.log(data.data);
      });
    }
   this.getUserChatsF();

    this.chatService.getMessageTypes().subscribe((data: any) => {
      console.log(data.data);
      this.messageTypes = data.data;
    });
  }
  getUserChatsF(){
    this.chatService.getUserChats().subscribe((data: any) => {
      console.log(data.data);
      this.dataShow = data.data;
      this.userCahts = data.data;
    });
  }

  activeUser: any = 0;
  activeChatUserChat: any = [];
  activeUserId: any = '';
  showMessage(user: any) {
    console.log(user);
    this.activeUser = user;
    this.activeUserId = user.id;
    this.getChatWithUser(user.id);
  }
  getChatWithUser(userId: any) {
    this.chatService.getChatWithUser(userId).subscribe((data: any) => {
      this.activeChatUserChat = data.data;
      console.log(this.activeChatUserChat);

      this.activeChatUserChat = this.activeChatUserChat.sort(function (
        a: any,
        b: any
      ) {
        return a.id - b.id;
      });
      console.log(this.activeChatUserChat);
    });
  }
  sendMessageToEndPoint(message: any, receiverId: any) {
    this.chatService.sendMessage(message).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ClearInputs();
        this.getChatWithUser(receiverId);
        this.getUserChatsF();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  ClearInputs() {
    this.textInput.nativeElement.value = '';
    this.fileImage.nativeElement.value = '';
  }
  isFileImage(file: any) {
    return file && file['type'].split('/')[0] === 'image';
  }
  sendMessage(message: string, receiverId: string) {
    console.log(this.isFileImage(this.fileMessage));
    var type: number = 1;
    if (message) {
      this.message.content = message;
      this.message.messageTypeId = type;
      this.message.receiverId = receiverId;
      this.sendMessageToEndPoint(this.message, receiverId);
    }
    if (this.fileMessage) {
      console.log(receiverId);
      this.isFileImage(this.fileMessage) ? (type = 2) : (type = 3);
      this.message.content = '';
      this.message.messageTypeId = type;
      this.message.receiverId = receiverId;
      this.chatService.sendMessage(this.message).subscribe({
        next: (data: any) => {
          console.log(data);
          var msgID = data.data.id;
          var fileFormData = new FormData();
          console.log(this.fileMessage);
          fileFormData.append('file', this.fileMessage);
          fileFormData.append('msgId', msgID);
          this.chatService.sendMessageFile(msgID, fileFormData).subscribe({
            next: (data: any) => {
              console.log(data);
              this.fileMessage = {};
              this.getUserChatsF();
              this.getChatWithUser(receiverId);
            },
            error: (error: any) => {
              console.log(error);
            },
          });
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

  fileMessage: any = '';
  onFileUpload(event: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.fileMessage = myfile;
      console.log(this.fileMessage);
      console.log(this.fileMessage.name);
    }
  }
  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  dataShow:any=[]
  search(word: any) {
    console.log(word)
    this.dataShow = [];
    this.userCahts.map((project: any) => {
      if (project.fullName.search(new RegExp(word, 'i')) != -1) {
        this.dataShow.push(project);
      }
    });
  }
}
