import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookingInfo, State } from './booking-info';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookingInfoList: BookingInfo[] = [
      {
        id: 0,
        firstName: 'John',
        lastName: 'Wall',
        name: 'House near the sea',
        state: State.Available,
        city: 'Silver Spring',
        address: '8 Chatham Way',
      },
      {
        id: 1,
        firstName: 'Sergio',
        lastName: 'Alverado',
        name: 'Apartment',
        state: State.Booked,
        city: 'Hobbs',
        address: '2640 Reel Avenue',
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Semissa',
        name: 'Apartment',
        state: State.Occupied,
        city: 'Yonkers',
        address: '965 Ward Road',
      },
      {
        id: 3,
        firstName: 'Kory',
        lastName: 'Wedny',
        name: 'House in the center',
        state: State.Occupied,
        city: 'Winston Salem',
        address: '289 Ingram Road',
      },
    ];
    return { bookingInfoList };
  }
}
