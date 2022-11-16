import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private _HttpClient: HttpClient) {}

  initiatePayment(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Payment/InitiatePayment`,
      data
    );
  }
  executePayment(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Payment/ExecutePayment`,
      data
    );
  }
  getMilestones(offerId: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Milestone/getMilestonesByOfferId/${offerId}`
    );
  }
}
