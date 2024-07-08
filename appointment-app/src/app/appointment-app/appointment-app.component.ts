import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-app',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-app.component.html',
  styleUrl: './appointment-app.component.css'
})
export class AppointmentAppComponent {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments : Appointment [] = []

  addAppointment(){
    //alert(this.newAppointmentTitle + " "  + this.newAppointmentDate);
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
    {
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = " ";
      this.newAppointmentDate = new Date();

      //alert(this.appointments.length)

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  //index : number -->remove the first element in our array that would be index zero
  deleteAppointment (index: number)
  {
    //splice is used to remove the first element and replace that with the next set of elements
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
