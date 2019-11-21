import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {}

calendarPage(){
  return this._http.get('/calendar_json');
}

}
