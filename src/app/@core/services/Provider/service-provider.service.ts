import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProviderService {
  personalData: any = {};
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
  /* *************************************individual**************************************** */

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

  /* ***************************************************************************************** */
  /* *************************************Organization**************************************** */
  storeOrganizationalProfile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/storeProfile`,
      data
    );
  }

  storeOrganizationalProfileFiles(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/storeProfileFiles`,
      data
    );
  }

  getOrganizationalServiceProviderProfile(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/getProfile`
    );
  }
  storeReprasintative(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Representative/storeRepresentative`,
      data
    );
  }
  storeOrganizationalServiceProviderWork(work: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/storeOrganizationalServiceProviderWork`,
      work
    );
  }
  storeOrganizationalServiceProviderWorkFilesByWorkId(
    images: any,
    workId: any
  ): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/storeOrganizationalServiceProviderWorkFilesByWorkId/${workId}`,
      images
    );
  }

  storeProfileFiles(files: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/storeProfileFiles`,
      files
    );
  }
  storeCompanyProfileFiles(files: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/storeProfileFiles`,
      files
    );
  }
  /* **************************************************************************************** */
  getServiceProviderWorks(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/getServiceProviderWorks`
    );
  }

  deleteServiceProviderWork(workId: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/ServiceProviderWork/deleteServiceProviderWork/${workId}`,
      workId
    );
  }
  /* *************************************** */

  getProjectSubServicesByServiceId(serviceId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectService/GetProjectSubServicesByServiceId/${serviceId}`
    );
  }
  /* ********************************** */
  getPaymentsForServiceProvider(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Payment/getPaymentsForServiceProvider`
    );
  }
  /* ***************************** */
  
  updateOrganizationalServiceProviderProfile(profile: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/updateProfile`,
      profile
    );
  }
}
