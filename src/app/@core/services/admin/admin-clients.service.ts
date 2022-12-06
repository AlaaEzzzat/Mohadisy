import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
@Injectable({
  providedIn: 'root'
})
export class AdminClientsService {

  private httpoptions ={}

  constructor(private _HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,


      })
    }
  }


  getAllClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getAllProfiles/Page/${page}`);
  }

  getNewClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getNewClientsProfiles/Page/${page}`);
  }

  getActiveClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getActiveProfiles/Page/${page}`);
  }

  getNonActiveClientProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getNonActiveProfiles/Page/${page}`);
  }

  getRejectedClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getRejectedClientsProfiles/Page/${page}`);
  }

  getBlockedClientsProfiles​(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getBlockedClientsProfiles/Page/${page}`);
  }

  getExpiredClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getExpiredClientsProfiles/Page/${page}`);
  }



  getNotCompletedClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getNotCompletedClientsProfiles/Page/${page}`);
  }

  //

  changeProfileStatus(objectStatus:IChangeStatus):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Client/changeProfileStatus`,JSON.stringify(objectStatus), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }
  //
  getRequiredWorkByWorkId(requiredWorkId:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/RequiredWorks/GetRequiredWorkByWorkId/${requiredWorkId}`);
  }
  getProjectComponentById(componentId:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getProjectComponentById/${componentId}`);
  }

}
