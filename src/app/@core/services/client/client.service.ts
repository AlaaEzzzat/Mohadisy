import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  requestedServiceId: any = 0;
  reuestedProject: any = {};
  projectRequiredFiles: any = [];
  constructor(private _HttpClient: HttpClient) {}
 

  getClientProfile(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Client/getClientProfile`
    );
  }
  getProjectServicesAndSubService(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/PriceQuotes/getProjectServicesAndSubService`
    );
  }
  getProjectService(serviceId: any, page?: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${
        environment.baseUrl
      }/api/PriceQuotes/getClientPriceQuotes/serviceId/${serviceId}/Page/${
        page || 1
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
  getOfferSender(profileId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Offer/getOfferSenderProfile/${profileId}`
    );
  }
  /* ******************************* */
  
  getAllProjectCategories(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectCategory/GetAllProjectCategories`
    );
  }

  getSubCategories(id: any) {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/ProjectCategory/GetProjectSubCategoriesByCategoryId/${id}`
    );
  }

  storeProject(data: any) {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Project/storeProject`,
      data
    );
  }
  //return project

  storeProjectFiles(idProject: any, files: any) {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/Project/storeProjectFiles/${idProject}`,
      files
    );
  }

  getAllComponent(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/project/getAllProjectComponents`
    );
  }
  getAllReqworks(serviceId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/RequiredWorks/GetRequiredWorksByServiceId/${serviceId}`
    );
  }

  getRequiredFilesByWorkId(workId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/RequiredWorks/GetRequiredDocumentsByWorkId/${workId}`
    );
  }

  getAllRequiredFiles(arrOfWorksId: any): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseUrl}/api/RequiredWorks/GetRequiredDocumentsByRequiredWorkIds`,
      arrOfWorksId
    );
  }

  getAccountStatus(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Account/checkAccountStatus`
    );
  }
 

  getProjectComponentById(componentId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getProjectComponentById/${componentId}`
    );
  }
  getRequiredWorkByWorkId(requiredWorkId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/RequiredWorks/GetRequiredWorkByWorkId/${requiredWorkId}`
    );
  }

  getProjectsByService(serviceId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getProjectsByService/${serviceId}`
    );
  }
  /* ****************************** */
  getMilestonesByOfferId(offerId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Milestone/getMilestonesByOfferId/${offerId}`
    );
  }
  getOfferSenderProfile(profileId: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Offer/getOfferSenderProfile/${profileId}`
    );
  }

  getClientCurrentProjects(page: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getClientCurrentProjects/Page/${page}`
    );
  }
  getClientPendingProjects(page: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getClientPendingProjects/Page/${page}`
    );
  }
  getClientFinishedProjects(page: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getClientFinishedProjects/Page/${page}`
    );
  }
  getClientLateProjects(page: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getClientLateProjects/Page/${page}`
    );
  }
  getClientStoppedProjects(page: any): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Project/getClientStoppedProjects/Page/${page}`
    );
  }
  /* ************************* */
  
  getPaymentsForClient(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseUrl}/api/Payment/getPaymentsForClient`
    );
  }

 
}
