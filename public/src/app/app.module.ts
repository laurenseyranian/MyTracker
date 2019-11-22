import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DateAdapter } from 'angular-calendar';
import { AdapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from 'angular-calendar';
import { MonthCalendarModule } from 'simple-angular-calendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LogComponent } from './log/log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { ViewLogComponent } from './view-log/view-log.component';

@NgModule({
  declarations: [
    AppComponent,
    DateAdapter,
    AdapterFactory,
    CalendarModule,
    CalendarComponent,
    MonthCalendarModule,
    HomeComponent,
    LogComponent,
    EditLogComponent,
    ViewLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
