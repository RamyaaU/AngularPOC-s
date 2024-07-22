import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventReservationFormComponent } from '../event-reservation-form/event-reservation-form.component';
import { EventReservationListComponent } from '../event-reservation-list/event-reservation-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventReservationFormComponent,
    EventReservationListComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class EventReservationModule { }
