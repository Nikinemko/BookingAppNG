import { Pipe, PipeTransform } from '@angular/core';
import { State } from './booking-info';
import { BookingService } from './booking.service';

@Pipe({
  name: 'bookingState',
})
export class BookingStatePipe implements PipeTransform {
  constructor(private bookingService: BookingService) {}
  transform(state?: State): string | null {
    return this.bookingService.getStateClass(state);
  }
}
