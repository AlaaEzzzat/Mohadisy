import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private _api: ApiService, private httpClient: HttpClient) { }
  getusers(ApiUrl: string): Observable<any> {
    return this._api.get(ApiUrl);
  }
}
