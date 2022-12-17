import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private identityService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let handled: boolean = false;
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    const isLoggedIn = this.identityService.authenticate();
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
        },
      });
    }
    return next.handle(request).pipe(
      retry(1),
      catchError((returnedError) => {
        let errorMessage = null;
        if (returnedError.error instanceof ErrorEvent) {
          errorMessage = returnedError.error?.message;
        } else if (returnedError instanceof HttpErrorResponse) {
          errorMessage = returnedError.error?.message;
          handled = this.handleServerSideError(returnedError);
        }
        if(errorMessage != 'لا يوجد مواعيد'){
          this._toastr.error(errorMessage ? errorMessage : returnedError);
        }
        if (!handled) {
          if (errorMessage) {
            return throwError(errorMessage);
          } else {
            return throwError('Unexpected problem occurred');
          }
        } else {
          return of(returnedError);
        }
      })
    );
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;
    switch (error.status) {
      case 401:
        this._toastr.error('Please login again.');
        handled = true;
        break;
      case 403:
        this._toastr.error('Please login again.');
        handled = true;
        break;
    }

    return handled;
  }
}
