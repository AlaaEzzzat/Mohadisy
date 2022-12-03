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
}
