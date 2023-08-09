export enum State {
  Available,
  Occupied,
  Booked,
}
export interface BookingInfo {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  state: State;
  city: string;
  address: string;
}
