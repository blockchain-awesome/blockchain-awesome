import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent {
  item: object;

  @ViewChild('main')
  el: ElementRef;

  @ViewChild('url')
  url: ElementRef;

  @ViewChild('coin')
  coin: ElementRef;

  coins;
  selected;
  address;
  constructor(private http: HttpClient, private rd: Renderer2) {
  }

  ngOnInit() {
    this.http.get("/assets/data/sites.json").subscribe((item) => {
      /*
        必须是三层的结构：
        第一个元素是根元素，描述网站本身的信息
        子元素是一级目录
        子元素的子元素是二级目录
        子元素的子元素的子元素是终极目录
       */
      this.item = item;
      this.coins = [
        { name: '比特币', url: 'https://blockchain.info/address/' },
        { name: '以太币', url: 'https://www.etherchain.org/account/' },
        { name: '莱特币', url: 'http://explorer.litecoin.net/address/' },
        { name: '以太经典', url: 'https://www.etcchain.com/addr/' }
      ];
    });
  }
  ngAfterViewInit() {
    this.onResize();
  }

  onResize() {
    if (window.innerWidth <= 576) {
      this.el.nativeElement.style.paddingLeft = "15px";
    } else {
      this.el.nativeElement.style.paddingLeft = "240px";
    }
  }
  onSelectCoin(coin) {
    this.selected = coin;
    this.coin.nativeElement.innerHTML = coin.name;
    this.coin.nativeElement.value = coin.name;

  }

  goto() {
    if (!this.address) {
      return false;
    }
    this.url.nativeElement.href = this.selected.url + this.address;

    return true;
  }
}

