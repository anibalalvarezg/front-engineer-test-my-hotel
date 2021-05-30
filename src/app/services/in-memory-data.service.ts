import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHotel } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hotels = [
      { id: 11, name: 'Maki Hostel', rating: 1, price: 50000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [1,0,1] },
      { id: 12, name: 'Hotel Fauna', rating: 3, price: 150000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [0,0,1] },
      { id: 13, name: 'Hotel Boutique Acontraluz', rating: 4, price: 120000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [0,1,1] },
      { id: 14, name: 'Hotel 17', rating: 2, price: 300000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [0,1,1] },
      { id: 15, name: 'Casa Galos Hotel & Lofts', rating: 5, price: 450000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [1,1,1] },
      { id: 16, name: 'Augusta Apart Hotel', rating: 5, price: 600000, createdAt: '2021-05-22T01:21:59.603Z', additionalServices: [1,1,1] },
    ];
    return {hotels};
  }

  genId(hotels: IHotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id)) + 1 : 11;
  }
}
