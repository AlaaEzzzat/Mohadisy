import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router,private _toastr: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('role') === '"Admin"') {
        return true;
      } else {
        this._toastr.error('يجب أن يكون لديك حساب أدمن أولا');
        this.router.navigate(['/account/signup']);
        return false;
      }
  }
  
}
