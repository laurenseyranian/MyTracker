import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';




const routes: Routes = [
  {path:'calendar', component:CalendarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'foodlog', component: LogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
