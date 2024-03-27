import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
class cachingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    return handler.handle(req);
  }
}
