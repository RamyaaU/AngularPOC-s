import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment-app.component.html',
  styleUrl: './appointment-app.component.css'
})
export class AppointmentAppComponent {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  addAppointment(){
    alert(this.newAppointmentTitle + " "  + this.newAppointmentDate);
  }
  
}
