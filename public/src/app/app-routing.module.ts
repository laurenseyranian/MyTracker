import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CalendarComponent } from './calendar/calendar.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 729acb55fe7673e952ace9dd16561eb047ce03b3



const routes: Routes = [
<<<<<<< HEAD
  {path:'calendar', component:CalendarComponent}
=======
    {path: 'home', component: HomeComponent},

>>>>>>> 729acb55fe7673e952ace9dd16561eb047ce03b3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
