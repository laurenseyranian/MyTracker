import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

constructor(private _http: HttpClient) { }


  ngOnInit() {
    // var data = this._http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=https://api.nytimes.com/svc/search/v2/articlesearch.json?q=beauty&api-key=3vV007lbGYtAKmPPk8lHB7wvZd2ddeSD')
    //   console.log(data)
  }

}
