import { BookingStatePipe } from './booking-state.pipe';

describe('BookingStatePipe', () => {
  it('create an instance', () => {
    const pipe = new BookingStatePipe();
    expect(pipe).toBeTruthy();
  });
});
