import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReservationFormComponent } from './event-reservation-form.component';

describe('EventReservationFormComponent', () => {
  let component: EventReservationFormComponent;
  let fixture: ComponentFixture<EventReservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventReservationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
