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
import 'rxjs/add/operator/do';
import * as SpinnerReducer from '@store/spinner/reducers';
import * as AuthReducer from '@store/auth/reducers';
import {StopSpinner} from '@store/spinner/actions';
import {SignOut} from '@store/auth/actions';
import {Router} from '@angular/router';
import {ResetPasswordComponent} from '@pages/auth/reset-password/reset-password.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private notificationManager: ToastrService,
    private store: Store<SpinnerReducer.SpinnerState>,
    private authStore: Store<AuthReducer.AuthState>,
    private authFacade: AuthFacade,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;
    if(this.router.url.split('?')[0] === '/auth/resetPassword') {
      token = AuthFacade.getToken(ResetPasswordComponent.getTokenPrefix());
    } else {
      token = AuthFacade.getToken();
    }

    if (token) {
      req = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + token
        })
      });
    }
    return next.handle(req).do((event: HttpEvent<any>) => {}, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.store.dispatch(new StopSpinner());
        if (err.status && err.status === 401 && this.router.url !== '/auth/login') {
          this.authStore.dispatch(new SignOut(this.authFacade));
        } else if (err.error.error) {
          this.notificationManager.error(err.error.error.message, 'Error' );
        } else {
          this.notificationManager.error('An error has occurred', 'Error');
        }
      }
    });
  }
}
