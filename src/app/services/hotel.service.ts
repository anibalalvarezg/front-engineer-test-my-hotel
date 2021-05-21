import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = 'api/hotels';  // URL to web api

  constructor(private http: HttpClient) { }

  getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.baseURL);
  }
}
