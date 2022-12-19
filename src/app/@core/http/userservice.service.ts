
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private _api: ApiService ) { }
  getusers(ApiUrl: string): Observable<any> {
    return this._api.get(ApiUrl);
  }
  getClientProfile(): Observable<any> {
    return this._api.get(`${environment.baseUrl}/api/Client/getClientProfile`);
  }
  getIndividualServiceProviderProfile(): Observable<any> {
    return this._api.get(`${environment.baseUrl}/api/IndividualServiceProvider/getProfile`);
  }
  getOrganizationalServiceProviderProfile(): Observable<any> {
    return this._api.get(`${environment.baseUrl}/api/OrganizationalServiceProvider/getProfile`);
  }
  
  getAdminProfile(): Observable<any> {
    return this._api.get(`${environment.baseUrl}/api/Admin/GetAdminProfile`);
  }
}
