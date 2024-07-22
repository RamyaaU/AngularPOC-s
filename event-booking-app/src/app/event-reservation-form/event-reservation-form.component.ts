import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-reservation-form.component.html',
  styleUrl: './event-reservation-form.component.css'
})
export class EventReservationFormComponent {

  eventBookingForm: FormGroup = new FormGroup({});
}
