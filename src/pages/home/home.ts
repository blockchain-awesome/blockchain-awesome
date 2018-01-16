import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: object;
  constructor(public navCtrl: NavController,
    private http: HttpClient) {
    // this.items = [{
    //   name: 'Hello World',
    //   url: '',
    //   icon: ''
    // }, {
    //   name: 'Hello World',
    //   url: '',
    //   icon: '',
    //   items: [
    //     {
    //       name: 'Hello World 1',
    //       url: '',
    //       icon: ''
    //     }, {
    //       name: 'Hello World 2',
    //       url: '',
    //       icon: ''
    //     }
    //   ]
    // }];
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
