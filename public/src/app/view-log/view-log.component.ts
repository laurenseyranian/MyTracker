import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {

  foodlogId;
  foodlog: any = {date: "", breakfast:"", am_snack:"", lunch:"", pm_snack:"", dinner:"", bedtime_snack:""}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router:Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.foodlogId = params['id']
    })
    this.readFoodlog();
  }
  readFoodlog() {
    console.log("in component, a-update: ", this.foodlogId)
    let observable = this._httpService.readFoodlog(this.foodlogId);
    observable.subscribe(data => {
      this.foodlog = data;
    });
  }

}
