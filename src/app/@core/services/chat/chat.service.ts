import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private _HttpClient: HttpClient) { }

 
  sendMessage(message: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Chat/sendMessage`,
      message
    );
  }
  storeConnectionId(connectionId: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Chat/storeConnectionId/${connectionId}`,
      ""
    );
  }
  
  getChatWithUser(userId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Chat/getChatWithUser/${userId}`
    );
  }
 
  getUserChats(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Chat/getUserChats`
    );
  }
  
  getMessageTypes(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Chat/getMessageTypes`
    );
  }
  
  sendMessageFile(messageId: any, file:any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Chat/sendMessageFile/${messageId}`,
      file
    );
  }
}
