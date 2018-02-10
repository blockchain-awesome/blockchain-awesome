import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: object;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log("inside init");
    this.http.get("/assets/data/sites.json").subscribe((item) => {
      console.log("get Items");
      console.log(item);
      /*
        必须是三层的结构：
        第一个元素是根元素，描述网站本身的信息
        子元素是一级目录
        子元素的子元素是二级目录
        子元素的子元素的子元素是终极目录
       */
      this.item = item;
    });
  }
}

