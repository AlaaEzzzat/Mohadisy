import { Router } from '@angular/router';
import { ChatService } from './../../../@core/services/chat/chat.service';
import { IMessage } from './../../../@models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-to-admin',
  templateUrl: './msg-to-admin.component.html',
  styleUrls: ['./msg-to-admin.component.scss'],
})
export class MsgToAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
