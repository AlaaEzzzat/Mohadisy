import { AuthService } from 'src/app/@core/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate {
  constructor(private _router: Router, private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     return of(true);
  //   } else {
  //     this._router.navigate(['account/login']);
  //     return of(false);
  //   }
  // }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.authenticate()) {
      const userRole = this.authService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        const token = localStorage.getItem('token');
        if (token) {
          return true;
        } else {
          this._router.navigate(['account/login']);
          return false;
        }
      }

      return true;
    }

    this._router.navigate(['/home']);
    return false;
  }
}
// let roles = JSON.parse(localStorage.getItem('role') || '{}');
// if (roles == 'admin') {
//   this._router.navigate(['/admin']);
// }
// if (roles == 'Service provider') {
//   console.log('sp dashboard loadedContent');
//   this._router.navigate(['/spmanagement']);
// }
// if (roles == 'Client') {
//   console.log('client dashboard loadedContent');
//   this._router.navigate(['/usermanagement/dashboard']);
// }
