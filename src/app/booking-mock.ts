import { BookingInfo, State } from './booking-info';

export const BOOKINGS: BookingInfo[] = [
  {
    id: 0,
    firstName: 'Moi',
    lastName: 'Shmoi',
    name: 'Best private property bitch',
    state: State.Available,
    city: 'Boston',
    address: 'Her znae de',
  },
  {
    id: 1,
    firstName: 'Avada',
    lastName: 'Kedavra',
    name: 'My basement',
    state: State.Booked,
    city: 'Minnesota',
    address: 'Sam znahodu',
  },
];
