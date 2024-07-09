import { Component, OnInit } from '@angular/core';
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
export class AppointmentAppComponent implements OnInit {

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");

    //this.appointments is either filled with saved data or starts as an empty list if no data is found.
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

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
      //this.appointments - it holds the array 
      //JSON.stringify(this.appointments) - converts data to JSON string format as localstorage only stores data to string
      // The appointments data is converted into a JSON string.
      // This JSON string is then saved in the browser’s local storage under the key "appointments".
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
