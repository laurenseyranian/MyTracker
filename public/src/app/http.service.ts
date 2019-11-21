import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

<<<<<<< HEAD
  constructor() {}

calendarPage(){
  return this._http.get('/calendar_json');
}

=======
    constructor(private _http: HttpClient) { }

    homePage() {
        return this._http.get('/home_json');
    }
>>>>>>> 729acb55fe7673e952ace9dd16561eb047ce03b3
}
