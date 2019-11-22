import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { FactComponent } from './fact/fact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ViewLogComponent } from './view-log/view-log.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'foodstop', component: LogComponent },
    { path: 'nutritionstop', component: FactComponent },
    { path: 'journalstop', component: CalendarComponent },
    { path: 'viewlog/:id', component: ViewLogComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
