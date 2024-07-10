import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReservationListComponent } from './event-reservation-list.component';

describe('EventReservationListComponent', () => {
  let component: EventReservationListComponent;
  let fixture: ComponentFixture<EventReservationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventReservationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
