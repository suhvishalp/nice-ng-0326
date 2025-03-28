import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      console.log('intercepting http request ', req.url)

      //verify the user login status, token expiry
      const token = localStorage.getItem('authToken')

      let authReq = req.clone();
      if(token){
        authReq = req.clone({
          setHeaders: {
            'Authorization' : `Bearer ${token}`
          }
        })
      }

      return next.handle(authReq).pipe(
        tap({
          next: (response) => {
            console.log('Intercepting Response ', response)
          },
          error: (error) => {
            console.log('handle the errors globally')
          }
        })
      );
  }
}
