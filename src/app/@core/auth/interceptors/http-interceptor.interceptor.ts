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
import { environment } from 'src/environments/environment';

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
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);

    const isLoggedIn = this.identityService.authenticate();

    const isApiUrl = request.url.startsWith(environment.baseUrl);

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
        let errormessage = null;

        if (returnedError.error instanceof ErrorEvent) {
          errormessage = `هناك خطأ: ${returnedError.error.message} `;
        } else if (returnedError instanceof HttpErrorResponse) {
          errormessage = `هناك خطأ: ${returnedError.error.message}`;
          handled = this.handleServerSideError(returnedError);
        }

        this._toastr.error(errormessage ? errormessage : returnedError);

        if (!handled) {
          if (errormessage) {
            return throwError(errormessage);
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
        localStorage.removeItem('token');
        handled = true;
        break;
      case 403:
        this._toastr.error('Please login again.');
        localStorage.removeItem('token');
        handled = true;
        break;
    }

    return handled;
  }
}
