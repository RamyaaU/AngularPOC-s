import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventReservationFormComponent } from './event-reservation-form/event-reservation-form.component';
import { EventReservationModule } from './event-reservation/event-reservation.module';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventReservationModule, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-booking-app';
}
