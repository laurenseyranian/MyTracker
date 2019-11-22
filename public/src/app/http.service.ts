import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  calendarPage() {
    return this._http.get('/calendar_json');
  }

  homePage() {
    return this._http.get('/home_json');
  }
  
  log() {
    return this._http.get('/log_json');
  }
  addLog(){
    return this._http.get('/log_json');
  }

}
