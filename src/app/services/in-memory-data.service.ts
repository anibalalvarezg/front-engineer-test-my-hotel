import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IHotel } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hotels = [
      { id: 11, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
      { id: 12, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
      { id: 13, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
      { id: 14, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
      { id: 15, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
      { id: 16, name: 'Dr Nice', rating: 3, price: 10000, aditionalServices: ['Wifi gratis', 'Desayuno', 'Lavandería'] },
    ];
    return {hotels};
  }

  genId(hotels: IHotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hero => hero.id)) + 1 : 11;
  }
}
