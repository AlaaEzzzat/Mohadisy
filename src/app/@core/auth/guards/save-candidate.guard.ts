import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddCandidateComponent } from 'src/app/nomination/add-candidate/add-candidate.component';
import { Messages } from '../../utils/Messages';

@Injectable({
  providedIn: 'root'
})
export class SaveCandidateGuard implements CanDeactivate<AddCandidateComponent> {
  constructor( private router: Router){}
  canDeactivate(
    component: AddCandidateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.step<7 && !component.afterCreate){
        return window.confirm(Messages.confirmNotSave)
      }
      return of(true)
  }

}
