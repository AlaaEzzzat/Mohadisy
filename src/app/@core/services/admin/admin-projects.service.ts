import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IChangeStatus } from 'src/app/@models/ichange-status';
@Injectable({
  providedIn: 'root'
})
export class AdminProjectsService {
  private httpoptions ={}

  constructor(private _HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,


      })
    }
  }




  getCurrentProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getCurrentProjectsForAdmin/Page/${page}`);
  }

  getPendingProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getPendingProjectsForAdmin/Page/${page}`);
  }
  getFinishedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getFinishedProjectsForAdmin/Page/${page}`);
  }

  getLateProjectsForAdmin(page:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getLateProjectsForAdmin/Page/${page}`)

  }
  getStoppedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getStoppedProjectsForAdmin/Page/${page}`);
  }
  // PriceQuotes

  getNewProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/PriceQuotes/getNewProjectsForAdmin/Page/${page}`);
  }
  getAcceptedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/PriceQuotes/getAcceptedProjectsForAdmin/Page/${page}`);
  }
  getRejectedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/PriceQuotes/getRejectedProjectsForAdmin/Page/${page}`);
  }

  getNotCompletedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/PriceQuotes/getNotCompletedProjectsForAdmin/Page/${page}`);
  }

  getAllPriceQuotesForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/PriceQuotes/getAllPriceQuotesForAdmin/Page/${page}`);
  }



  //

  changeProfileStatus(objectStatus:any):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Project/changeProjectStatus`,JSON.stringify(objectStatus),this.httpoptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        return new Error('Error occured please try again.')

      })
    }))
  }
}
