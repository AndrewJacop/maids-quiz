import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './core/routes/app.routes';
import { cachingInterceptor } from './core/interceptors/Caching.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([cachingInterceptor])),
    { provide: HTTP_INTERCEPTORS, useClass: cachingInterceptor, multi: true },
  ],
};
