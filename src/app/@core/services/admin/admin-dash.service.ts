import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  constructor(private _HttpClient:HttpClient) { }
  adminDashboard():Observable<any>{
    return this._HttpClient.get<any>(`${environment.baseUrl}/api/Dashboard/getAdminStatus`);

  }
}
