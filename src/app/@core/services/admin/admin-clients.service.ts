import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminClientsService {


  constructor(private _HttpClient:HttpClient) {

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
    return this._HttpClient.get<any>(`${environment.baseUrl}/api​/Client​/getBlockedClientsProfiles​/Page​/${page}`);
  }

  getExpiredClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getExpiredClientsProfiles/Page/${page}`);
  }



  getNotCompletedClientsProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Client/getNotCompletedClientsProfiles/Page/${page}`);
  }

  
}
