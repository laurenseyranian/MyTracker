import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  errors = []; //erors when creating a restaurant
  newFoodlog: any = {date: "", breakfast:"", am_snack:"", lunch:"", pm_snack:"", dinner:"", bedtime_snack:""}
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router:Router,
  ) { }

  ngOnInit() {
  }

  createFoodLog() {
    console.log("in component, a-create: ", this.newFoodlog)
    let observable = this._httpService.createFoodlog(this.newFoodlog);
    observable.subscribe(data => {
      console.log(data)
      if (data['errors']){
        this.errors = data['errors']
      }else{
        this.errors = [];
        this.newFoodlog = {date: "", breakfast:"", am_snack:"", lunch:"", pm_snack:"", dinner:"", bedtime_snack:""}
        this.gotoJournal();
      }
    })
  }
  gotoJournal(){    
    this._router.navigate(['/journalstop'])
  }
}
