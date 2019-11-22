import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  foodlogs: any;
  foodlog: any;

  ngOnInit() {
    this.getAllFoodLogs();
  }
  getAllFoodLogs(){
    console.log("in component, calendar: ", this.foodlogs)
    let observable = this._httpService.readFoodlogs();
    observable.subscribe(data => {
      console.log("Got our foodlogs!", data)
      this.foodlogs = data;
    });
  }
  deleteFoodlog(foodlog){
    let observable = this._httpService.deleteFoodlog(foodlog._id);
    observable.subscribe(data => {
      this.getAllFoodLogs();
    });
  }

}