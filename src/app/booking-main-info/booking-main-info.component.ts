import { Component, Input } from '@angular/core';
import { BookingInfo } from '../booking-info';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-main-info',
  templateUrl: './booking-main-info.component.html',
  styleUrls: [
    './booking-main-info.component.css',
    './booking-main-info.component-less.less',
  ],
})
export class BookingMainInfoComponent {
  @Input() bookingData!: BookingInfo;

  constructor(private bookingService: BookingService) {}

  getStateClass(state: number): string | null {
    return this.bookingService.getStateClass(state)
      ? this.bookingService.getStateClass(state)
      : 'empty';
  }
}
