import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  homePage() {
    return this._http.get('/home_json');
  }
  logPage() {
    return this._http.get('/log_json');
  }
  calendarPage() {
    return this._http.get('/calendar_json');
  }
  factPage() {
    return this._http.get('/fact_json');
  }

}
