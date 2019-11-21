import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthCalendarModule } from 'simple-angular-calendar';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { ViewLogComponent } from './view-log/view-log.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    LogComponent,
    EditLogComponent,
    ViewLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonthCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
