import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpPriceOfferService {

  constructor(private _HttpClient: HttpClient) {}

  GetProjectServicesWithCountForSP(page?:any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/GetProjectServicesWithCountForSP/Page/${page || 1}`
    );
  }
  getSPRejectedOffers(page?:any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/getSPRejectedOffers/Page/${page || 1}`
    );
  }
  getSPAcceptedOffers(page?:any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/getSPAcceptedOffers/Page/${page || 1}`
    );
  }
  getSPNewProjects(page?:any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/getSPNewProjects/Page/${page || 1}`
    );
  }
  GetSPPriceQuotesIAppliedFor(page?:any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/GetSPPriceQuotesIAppliedFor/Page/${page || 1}`
    );
  }
}
