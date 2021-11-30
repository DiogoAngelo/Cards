import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  get(endpoint: any) {
   return this.http.get(`${environment.api}/${endpoint}`).toPromise();
  }
}
