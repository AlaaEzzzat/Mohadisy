import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceProvidorService {

  constructor(private _HttpClient:HttpClient) {

  }
  getAllProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getAllProfiles/Page/${page}`);
  }

  getNewProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getNewProfiles/Page/${page}`);
  }

  getAcceptedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getAcceptedProfiles/Page/${page}`);
  }

  getRejectedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getRejectedProfiles/Page/${page}`);
  }

  getBlockedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getBlockedProfiles/Page/${page}`);
  }

  getExpiredProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getExpiredProfiles/Page/${page}`);
  }

  getClosedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getClosedProfiles/Page/${page}`);
  }

  getCompletedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getCompletedProfiles/Page/${page}`);
  }

  getNotCompletedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getNotCompletedProfiles/Page/${page}`);
  }

  getActiveProfiles​(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getActiveProfiles/Page/${page}`);
  }
  getNonActiveProfiles​(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getNonActiveProfiles/Page/${page}`);
  }
  getAllProfilesDetails(page:any,id:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getAllProfiles/Page/${page}`)
  }
}
