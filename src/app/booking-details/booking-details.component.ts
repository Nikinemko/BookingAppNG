import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { BookingInfo } from '../booking-info';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {
  bookingData$?: Observable<BookingInfo>;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {
    const bookingId = parseInt(this.route.snapshot.params['id'], 10);
    this.bookingData$ = this.bookingService.getBookingById(bookingId);
  }
}
