import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'booking/:id', component: BookingDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
