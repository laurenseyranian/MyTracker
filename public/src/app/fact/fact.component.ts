import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-fact',
    templateUrl: './fact.component.html',
    styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

    constructor(private _http: HttpClient) { }

    articles: any;

    ngOnInit() {
        this._http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=food&api-key=I6fIUq30TyULsrLIjHVC0z0tmIl79dob').subscribe(data => { 
        console.log(data);
        this.articles = data
        })
    }

}
