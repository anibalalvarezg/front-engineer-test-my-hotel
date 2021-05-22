import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = 'api/hotels';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.baseURL);
  }

  deleteHotel(hotelId: number): Observable<IHotel> {
    const url = `${this.baseURL}/${hotelId}`;
    return this.http.delete<IHotel>(url, this.httpOptions);
  }

  getHotel(hotelId: number): Observable<IHotel> {
    const url = `${this.baseURL}/${hotelId}`;
    return this.http.get<IHotel>(url);
  }

  updateHotel(hotel: IHotel): Observable<any> {
    return this.http.put(this.baseURL, hotel, this.httpOptions);
  }
}
