import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminPaymentsService {

  constructor(private _HttpClient:HttpClient) { }

  getClientsPaymentsForAdmin():Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Payment/getClientsPaymentsForAdmin`);
  }
  getServiceProvidersPaymentsForAdmin():Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Payment/getServiceProvidersPaymentsForAdmin`);
  }
}
