import { Component } from '@angular/core';
import { Appointment } from './models/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'appointment-app';

  //appointment : string = "Pay Credit Card Bill"

  appointment : Appointment ={
    id : 1,
    title : "Pay Credit Card bill",
    date : new Date(),
  }
}
