import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private _HttpClient: HttpClient) {}
  storeComplaint(complaint: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Complaint/storeComplaint`,
      complaint
    );
  }
  getComplaints(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Complaint/getComplaints`
    );
  }

  getAllOrganizationalServiceProviderProfiles(page?: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${
        environment.baseUrl
      }/api/OrganizationalServiceProvider/getAllProfiles/Page/${page || 1}`
    );
  }
  getAllIndividualServiceProviderProfiles(page?: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${
        environment.baseUrl
      }/api/IndividualServiceProvider/getAllProfiles/Page/${page || 1}`
    );
  }
  getAllClientProfiles(page?: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Client/getAllProfiles/Page/${page || 1}`
    );
  }
}
