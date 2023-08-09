import { Injectable } from '@angular/core';
import { BookingInfo, State } from './booking-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient, private location: Location) {}

  private bookingApi = 'api/bookingInfoList';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private log(message: string) {
    console.log(`BookingService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStateClass(state?: State): string | null {
    if (state === State.Available) {
      return 'available';
    }

    if (state === State.Occupied) {
      return 'occupied';
    }

    if (state === State.Booked) {
      return 'booked';
    }

    return null;
  }

  goBack(): void {
    this.location.back();
  }

  getAllBooking(): Observable<BookingInfo[]> {
    return this.http.get<BookingInfo[]>(this.bookingApi).pipe(
      tap((_) => this.log('fetched bookings')),
      catchError(this.handleError<BookingInfo[]>('getAllBooking', []))
    );
  }

  getBookingById(id: number): Observable<BookingInfo> | undefined {
    const url = `${this.bookingApi}/${id};`;
    return this.http.get<BookingInfo>(url).pipe(
      tap((_) => this.log(`fetched booking id=${id}`)),
      catchError(this.handleError<BookingInfo>(`getBookingById =${id}`))
    );
  }

  updateBooking(booking: BookingInfo): Observable<any> {
    return this.http.put(this.bookingApi, booking, this.httpOptions).pipe(
      tap((_) => this.log(`updated booking id=${booking.id}`)),
      catchError(this.handleError<any>('updateBooking'))
    );
  }

  addBooking(booking: BookingInfo): Observable<BookingInfo> {
    return this.http
      .post<BookingInfo>(this.bookingApi, booking, this.httpOptions)
      .pipe(
        tap((newBooking: BookingInfo) =>
          this.log(`added booking w/ id=${newBooking.id}`)
        ),
        catchError(this.handleError<BookingInfo>('addBooking'))
      );
  }
}
