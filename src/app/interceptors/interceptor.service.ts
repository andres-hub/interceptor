import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{

    const headers = new HttpHeaders({
      'token-usuario': 'sxsf2464546546d5g4d6f5g445'
    });

    const reqClone = req.clone({headers});

    console.log('Paso por el interceptor');
    return next.handle(reqClone).pipe(catchError(this.menjarError));
  }

  menjarError(error: HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.log(error);
    return throwError('Error personalizado');
  }

}
