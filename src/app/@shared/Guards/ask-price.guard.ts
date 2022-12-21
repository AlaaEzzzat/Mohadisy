import { ToastrService } from 'ngx-toastr';
import { ClientService } from './../../@core/services/client/client.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AskPriceGuard implements CanActivate {
  constructor(private router: Router,private toester:ToastrService, private clientService: ClientService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.clientService.requestedServiceId) {
      return true;
    } else {
      this.toester.error('يجب إختيار نوع الطلب أولا');
      this.router.navigate(['usermanagement/dashboard']);
      return false;
    }
  }
}
