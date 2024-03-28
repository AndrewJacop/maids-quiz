import {
  HttpEvent,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { CacheService } from '../../shared/services/Cache.service';
import { of, tap } from 'rxjs';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  const cachingService = inject(CacheService);

  if (req.method !== 'GET') return next(req);

  const cachedResponse = cachingService.get(req.url);
  if (cachedResponse) return of(cachedResponse);

  return next(req).pipe(
    tap({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response)
          cachingService.put(req.url, event.body);
      },
    })
  );
};
