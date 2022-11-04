import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _HttpClient: HttpClient) {}
  getProjectServicesAndSubService(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/getProjectServicesAndSubService`
    );
  }
  getProjectSubService(serviceId: any, page?: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${
        environment.baseUrl
      }/api/PriceQuotes/getClientPriceQuotes/serviceId/${serviceId}/Page/${
        page | 1
      }`
    );
  }
  acceptOffer(offerId: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Offer/acceptOffer/${offerId}`,
      offerId
    );
  }
  checkStatus(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Account/checkAccountStatus`
    );
  }
}
