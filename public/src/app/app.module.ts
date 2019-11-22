import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { CalendarModule } from 'angular-calendar';
import { MonthCalendarModule } from 'simple-angular-calendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LogComponent } from './log/log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { ViewLogComponent } from './view-log/view-log.component';
import { FactComponent } from './fact/fact.component';

@NgModule({
  declarations: [
    AppComponent,
    // CalendarModule,
    CalendarComponent,
    HomeComponent,
    LogComponent,
    EditLogComponent,
    ViewLogComponent,
    FactComponent
  ],
  imports: [
    BrowserModule,
    MonthCalendarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
