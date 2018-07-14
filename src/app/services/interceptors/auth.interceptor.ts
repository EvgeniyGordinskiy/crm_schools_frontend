import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {AuthService} from '@services/auth/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthService.getToken();
    if (token) {
      const copiedReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + token
        })
      });
      return next.handle(copiedReq);
    }
    return next.handle(req);
  }
}
