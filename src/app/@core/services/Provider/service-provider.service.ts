import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProviderService {
  constructor(private _HttpClient: HttpClient) {}

  getAllCompanyClassifications(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/getAllCompanyClassifications`
    );
  }
  getAllBanks(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Banks/GetAllBanks`
    );
  }
  storeIndividualServiceProviderProfile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/IndividualServiceProvider/storeIndividualServiceProviderProfile`,
      data
    );
  }
  storeImages(files: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/IndividualServiceProvider/storeIndividualServiceProviderFiles`,
      files
    );
  }

  getAllProjectCategory(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectCategory/GetAllProjectCategories`
    );
  }
  storeIndividualServiceProviderWork(work: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/storeIndividualServiceProviderWork`,
      work
    );
  }
  storeIndividualServiceProviderWorkFilesByWorkId(
    images: any,
    workId: any
  ): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/storeIndividualServiceProviderWorkFilesByWorkId/${workId}`,
      images
    );
  }

  getServiceProviderWorks(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/getServiceProviderWorks`
    );
  }
}
