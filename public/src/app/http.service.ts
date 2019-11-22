import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  readFoodlogs(){
    return this._http.get('/foodlogs_json/calendar');
  }
  createFoodlog(newFoodlog){
    return this._http.post('/foodlogs_json/new', newFoodlog);  
  }
  readFoodlog(id){
    return this._http.get(`/foodlogs_json/${id}`);
  }
  updateFoodlog(foodlog){
    return this._http.put(`/foodlogs_json/${foodlog._id}/edit`, foodlog);
  }
  deleteFoodlog(id){
    return this._http.delete(`/foodlogs_json/${id}/delete`);
  }
  calendarPage() {
    return this._http.get('/calendar_json');
  }
  factPage() {
    return this._http.get('/fact_json');
  }

}
