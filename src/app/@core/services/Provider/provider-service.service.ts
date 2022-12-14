import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderServiceService {
  constructor(private _HttpClient: HttpClient) {}

  getRegions(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Address/getRegions`
    );
  }

  getCities(regionId: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Address/getCitiesByRegion/${regionId}`
    );
  }
  Profile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/storeProfile`,
      data
    );
  }

  getDistricts(citiesId: number): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Address/getDistrictsByCity/${citiesId}`
    );
  }

  projectServices(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectService/GetAllProjectServices`
    );
  }

  subServicesByServiceId(projectServiceId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectService/GetProjectSubServicesByServiceId/${projectServiceId}`
    );
  }

  Files(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/storeProfileFiles`,
      data
    );
  }

  representative(data: any): Observable<any> {
    console.log(data);
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Representative/updateRepresentative`,
      data
    );
  }

  getR(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/getProfile`
    );
  }

  updateProfile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/OrganizationalServiceProvider/updateProfile`,
      data
    );
  }

  storeClientIdFile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Client/storeClientIdFile`,
      data
    );
  }

  storeClientProfile(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Client/storeClientProfile`,
      data
    );
  }
  postAdress(data: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Address/storeNewAddress`,
      data
    );
  }
}
