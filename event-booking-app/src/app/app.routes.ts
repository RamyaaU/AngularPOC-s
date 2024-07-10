import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventReservationFormComponent } from './event-reservation-form/event-reservation-form.component';
import { EventReservationListComponent } from './event-reservation-list/event-reservation-list.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"form", component:EventReservationFormComponent},
    {path:"list", component:EventReservationListComponent},
];
