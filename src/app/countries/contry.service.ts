import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICountry } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContryService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  countries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.BASE_URL}/all`)
  }
  fetchcounrty(country_name : string) : Observable<ICountry> {
    return this.http.get<ICountry>(`${this.BASE_URL}/name/${country_name}`)
  }

}
