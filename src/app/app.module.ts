import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingHeaderComponent } from './booking-header/booking-header.component';
import { BookingFooterComponent } from './booking-footer/booking-footer.component';
import { BookingMainInfoComponent } from './booking-main-info/booking-main-info.component';
import { BookingStatePipe } from './booking-state.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { FormTransformComponent } from './form-transform/form-transform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingDetailsComponent,
    BookingHeaderComponent,
    BookingFooterComponent,
    BookingMainInfoComponent,
    BookingStatePipe,
    FormTransformComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
