import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to avoid modifying the original request
    const clonedRequest = request.clone();

    // Intercept the response
    return next.handle(clonedRequest).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Modify response headers here if needed
          event.headers.set('Cross-Origin-Opener-Policy', 'restrict-properties');
          event.headers.set('Content-Security-Policy', 'Cross-Origin-Embedder-Policy');

        }
      })
    );
  }
}
