import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { IadminOfficialUserRegister } from 'src/app/@models/iadmin-official-user-register';


@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private httpoptions ={}
  constructor(private _HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,


      })
    }
   }

  adminDashboard():Observable<any>{
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Dashboard/getAdminStatus`);

  }

  getCurrentProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getCurrentProjectsForAdmin/Page/${page}`);
  }
  getFinishedProjectsForAdmin(page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Project/getFinishedProjectsForAdmin/Page/${page}`);
  }

  getMilestonesByOfferId(offerId:any){
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Milestone/getMilestonesByOfferId/${offerId}`)
  }
  // https://app.mohandisy.com/api/Role/getOfficialRoles
  getOfficialRoles(){
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Role/getOfficialRoles`)

  }
  
// ​/api​/Authenticate​/officialUserRegister
  officialUserRegister(objectStatus:any):Observable<any>
  {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/Authenticate/officialUserRegister`,JSON.stringify(objectStatus), this.httpoptions);
  }
  // https://app.mohandisy.com/api/Dashboard/getUsers

  getUsersDashboard(){
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Dashboard/getUsers`)

  }
  

}
