import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IprofileAdmin } from './../../../@models/iprofile-admin';
@Injectable({
  providedIn: 'root'
})
export class AdminSettingsService {
  private httpoptions ={}

  constructor(private _HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,


      })
    }
  }


  getAdminProfile():Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Admin/GetAdminProfile`);
  }
  updateAdminProfile(profileAdmin:any):Observable<any>
  {

    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Admin/updateAdminProfile`,JSON.stringify(profileAdmin), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }

  getUserNotifications(check:boolean):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Notification/getUserNotifications/${check}`);
  }
  readNotification(id:any):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Notification/readNotification/${id}`,JSON.stringify(id), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }));
  }

  getActiveUsers():Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Admin/getActiveUsers`);
  }

  getNonActiveUsers():Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Admin/getNonActiveUsers`);
  }
  // /api/Account/changeAccountActivation

  changeAccountActivation(id:any):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Account/changeAccountActivation`,JSON.stringify(id), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }));
  }


}

