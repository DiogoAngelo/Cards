import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  get(endpoint: string, params = {}) {
   return this.http.get(`${environment.api}/${endpoint}`, this.getOptions(params))
   .toPromise();
  }

  post(endpoint: string, params = {}) {
    return this.http.post(`${environment.api}/${endpoint}`, params, this.getOptions())
    .toPromise();
  }

  patch(endpoint: any, params = {}) {
    return this.http.patch(`${environment.api}/${endpoint}`, params, this.getOptions())
    .toPromise();
  }

  delete(endpoint: string, params = {}) {
    return this.http.delete(`${environment.api}/${endpoint}`, this.getOptions())
    .toPromise();
  }

  private getOptions(params = {}, body = {}) {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    return {
      headers,
      params,
      body,
    };
  }
}
