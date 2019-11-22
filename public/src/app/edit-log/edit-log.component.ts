import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  errors = [];
  foodlogId;
  editlog: any = { date: "", breakfast: "", am_snack: "", lunch: "", pm_snack: "", dinner: "", bedtime_snack: "" }

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.foodlogId = params['id']
    });
  }
  updatefoodlog(){
    console.log("in component, a-update: ", this.editlog)
    let observable = this._httpService.updateFoodlog(this.editlog);
    observable.subscribe(data => {
      console.log(data)
      if (data['errors']){
        this.errors = data['errors']
      }else{
        this.errors = [];
        // this.goHome();
      }
    });
  }
}
