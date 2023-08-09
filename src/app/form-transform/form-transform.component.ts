import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingInfo, State } from '../booking-info';
import { BookingService } from '../booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transform',
  templateUrl: './reactive-form-transform.component.html',
  styleUrls: ['./form-transform.component.css'],
})
export class FormTransformComponent implements OnInit {
  @Input() data!: BookingInfo;
  stateData: State[] = [State.Available, State.Booked, State.Occupied];
  bookingForm!: FormGroup;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      name: new FormControl(this.data.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z ]+'),
      ]),
      state: new FormControl(this.data.state, [Validators.required]),
    });

    this.bookingForm.valueChanges.subscribe((fields) =>
      this.bookingForm.patchValue(
        { state: +fields.state },
        { emitEvent: false }
      )
    );
  }

  onSubmit() {
    const data = { ...this.bookingForm.value, id: this.data.id };

    if (data) {
      this.bookingService
        .updateBooking(data)
        .subscribe(() => this.bookingService.goBack());
    }
  }

  // onSubmit() {
  //   if (this.data) {
  //     this.bookingService
  //       .updateBooking(this.data)
  //       .subscribe(() => this.bookingService.goBack());
  //   }
  // }
}
