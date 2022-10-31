import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = false;
  roleAs: string = '';
  constructor(
    private ApiSvc: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private Api: ApiService
  ) {}

  signup(url: string, body: {}): Observable<any> {
    return this.Api.postJson(url, body);
  }

  login(url: string, body: {}): Observable<any> {
    this.isLogin = true;
    localStorage.setItem('STATE', 'true');
    return this.Api.postJson(url, body);
    // return this._http.post(url, body);
  }

  authenticate(): boolean {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true') this.isLogin = true;
    else this.isLogin = false;
    return this.isLogin;
  }

  logout() {
    this.isLogin = false;
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('token', '');
    localStorage.setItem('roles', '');
    this.router.navigate(['/login']);
  }
  getRole() {
    this.roleAs = JSON.parse(localStorage.getItem('role') || '{}');
    return this.roleAs;
  }
  restpassword(url: string): Observable<any> {
    return this.Api.postJson(url);
  }

  confirmEmial(url: string, body: {}): Observable<any> {
    return this.Api.postJson(url, body);
  }
  setnewPassword(url: string, body: {}): Observable<any> {
    return this.Api.postJson(url, body);
  }
}
