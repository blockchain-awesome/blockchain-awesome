import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: object;
  constructor(public navCtrl: NavController,
    private http: HttpClient) {
  }

  ngOnInit() {
    console.log("inside init");
    this.http.get("/assets/data/sites.json").subscribe((item) => {
      console.log("get Items");
      console.log(item);
      this.item = item;
    });
  }

}
