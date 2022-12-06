import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpAuthGuard implements CanActivate {
  constructor(private router: Router,private _toastr: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('role') === '"Service provider"') {
        return true;
      } else {
        this._toastr.error('يجب أن يكون لديك حساب مزود خدمه أولا');
        this.router.navigate(['/account/signup']);
        return false;
      }
  }
  
}