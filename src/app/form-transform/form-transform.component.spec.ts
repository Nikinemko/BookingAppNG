import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransformComponent } from './form-transform.component';

describe('FormTransformComponent', () => {
  let component: FormTransformComponent;
  let fixture: ComponentFixture<FormTransformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTransformComponent]
    });
    fixture = TestBed.createComponent(FormTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
