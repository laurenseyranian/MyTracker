import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthCalendarModule } from 'simple-angular-calendar';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 729acb55fe7673e952ace9dd16561eb047ce03b3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CalendarComponent
=======
    HomeComponent
>>>>>>> 729acb55fe7673e952ace9dd16561eb047ce03b3
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
