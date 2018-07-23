import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const url = 'http://ec2-18-221-164-63.us-east-2.compute.amazonaws.com:8000/api/';
    const url = 'http://localhost:8000/api/';
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}
