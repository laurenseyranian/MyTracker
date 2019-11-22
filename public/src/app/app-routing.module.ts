import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { ViewLogComponent } from './view-log/view-log.component';


const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'foodlogs', component: HomeComponent},
  {path: 'calendar', component:CalendarComponent},
  {path: 'foodlog/new', component: LogComponent },
  {path: 'foodlog/:id', component: ViewLogComponent },
  {path: 'foodlog/:id/edit', component: EditLogComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
