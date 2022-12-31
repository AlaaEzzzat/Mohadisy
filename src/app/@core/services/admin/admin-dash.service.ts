import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IadminOfficialUserRegister } from 'src/app/@models/iadmin-official-user-register';

@Injectable({
  providedIn: 'root',
})
export class AdminDashService {
  private httpoptions = {};
  private httpoptionsFile = {};

  constructor(private _HttpClient: HttpClient) {
    this.httpoptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    this.httpoptionsFile = {
      headers: new HttpHeaders({
        'content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }
  adminDashboard(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Dashboard/getAdminStatus`
    );
  }
  getServiceProviderStatus() {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Dashboard/getServiceProviderStatus`
    );
  }
  getCurrentProjectsForAdmin(page: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getCurrentProjectsForAdmin/Page/${page}`
    );
  }
  getFinishedProjectsForAdmin(page: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getFinishedProjectsForAdmin/Page/${page}`
    );
  }
  getMilestonesByOfferId(offerId: any) {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Milestone/getMilestonesByOfferId/${offerId}`
    );
  }
  getOfficialRoles() {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Role/getOfficialRoles`
    );
  }
  officialUserRegister(objectStatus: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Authenticate/officialUserRegister`,
      JSON.stringify(objectStatus),
      this.httpoptions
    );
  }
  getUsersDashboard() {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Dashboard/getUsers`
    );
  }
  appointmentsEndAndStartDte(date: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Appointment/getAppointments`,
      JSON.stringify(date),
      this.httpoptions
    );
  }

  storeAppointmentFiles(appointmentId: any, date: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Appointment/storeAppointmentFiles/${appointmentId}`,
      date
    );
  }
  storeAppointment(object: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Appointment/storeAppointment`,
      JSON.stringify(object),
      this.httpoptions
    );
  }
 deleteAppointment(object: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Appointment/deleteAppointment/${object}`,{},this.httpoptions);
  }
}
