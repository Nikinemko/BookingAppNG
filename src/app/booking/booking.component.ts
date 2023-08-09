import { Component } from '@angular/core';
import { BookingInfo } from '../booking-info';
import { BookingService } from '../booking.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  bookingInfo$!: Observable<BookingInfo[]>;

  constructor(private bookingService: BookingService) {}

  private getAllBooking() {
    this.bookingInfo$ = this.bookingService.getAllBooking();
  }

  ngOnInit(): void {
    this.getAllBooking();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.bookingService
      .addBooking({ name } as BookingInfo)
      .subscribe(() => this.getAllBooking());
  }
}
