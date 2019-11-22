import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FactComponent } from './fact/fact.component';




const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'foodstop', component: LogComponent },
    { path: 'calendarstop', component: CalendarComponent },
    { path: 'nutritionstop', component: FactComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
