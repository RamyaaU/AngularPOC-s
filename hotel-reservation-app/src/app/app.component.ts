import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { ReservationModule } from './reservation/reservation.module';
import { HomeModule } from './home/home.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReservationModule, HomeModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-reservation-app';
}
