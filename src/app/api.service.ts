import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  get(endpoint: any, params = {}) {
   return this.http.get(`${environment.api}/${endpoint}`, this.getOptions(params))
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
