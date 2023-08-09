import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMainInfoComponent } from './booking-main-info.component';

describe('BookingMainInfoComponent', () => {
  let component: BookingMainInfoComponent;
  let fixture: ComponentFixture<BookingMainInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingMainInfoComponent],
    });
    fixture = TestBed.createComponent(BookingMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
