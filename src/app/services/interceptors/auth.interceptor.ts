import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {AuthFacade} from '@app/facades/auth/authFacade';
import {ToastrService} from 'ngx-toastr';

// @ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import * as SpinnerReducer from '@store/spinner/reducers';
import {StopSpinner} from '@store/spinner/actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private notificationManager: ToastrService,
    private store: Store<SpinnerReducer.SpinnerState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthFacade.getToken();
    if (token) {
      req = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + token
        })
      });
    }
    next.handle(req).subscribe(
      () => {},
      (err: any) => {
        this.store.dispatch(new StopSpinner());
        if (err.error.error.message) {
          this.notificationManager.error(err.error.error.message, 'Error' );
        } else {
          this.notificationManager.error('An error has occurred', 'Error');
        }
      }
    );
    return next.handle(req);
  }
}
