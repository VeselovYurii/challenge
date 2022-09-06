import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { APP_CONFIG } from '../shared';
import { EnvironmentInterface } from '../data-access';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject(APP_CONFIG) public appConfig: EnvironmentInterface,
    public http: HttpClient
  ) {
  }

  public get(
    url: string,
    params?: HttpParams | null,
  ): Observable<any> {
    params = params ? params : new HttpParams();
    return this.http.get(`${this.appConfig.api}${url}`, {
      params
    });
  }

  public post<T, D>(
    url: string,
    data: D,
    options?: { [key: string]: any }
  ): Observable<T> {
    return this.http.post<T>(`${this.appConfig.api}${url}`, JSON.stringify(data), {
      ...(options ?? {})
    });
  }

  public handleRequestError(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    return throwError(error);
  }
}
