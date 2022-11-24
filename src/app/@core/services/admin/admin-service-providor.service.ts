import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { saveAs } from 'file-saver';
import { IND } from './../../../administration/admin-sp-updata/admin-sp-updata.component';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceProvidorService {
  private httpoptions ={}

  constructor(private _HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,


      })
    }
  }


  getNewProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getNewProfiles/Page/${page}`);
  }
  getNotCompletedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getNotCompletedProfiles/Page/${page}`);
  }
  getCompletedProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getCompletedProfiles/Page/${page}`);
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
  getAllProfiles(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProvider/getAllProfiles/Page/${page}`);
  }




  activeProfile​(page:number):Observable<any>
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

  getServiceProviderWorkFilesByWorkId(id:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/ServiceProviderWork/getServiceProviderWorkFilesByWorkId/${id}`)
  }


  changeOrganizationalStatus(objectStatus:IChangeStatus):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/OrganizationalServiceProvider/changeProfileStatus`,JSON.stringify(objectStatus), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }
  changeIndividualStatus(objectStatus:IChangeStatus):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/IndividualServiceProvider/changeProfileStatus`,JSON.stringify(objectStatus), this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }




  updateOrganizationalUpdateProfile(objectStatus:any):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/OrganizationalServiceProvider/updateProfile`,JSON.stringify(objectStatus), this.httpoptions).pipe(catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }
  updateIndividualUpdateProfile(objectStatus:IND):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/IndividualServiceProvider/updateIndividualServiceProviderProfile`,JSON.stringify(objectStatus), this.httpoptions).pipe(catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }

}
