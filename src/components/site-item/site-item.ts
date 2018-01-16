import { Component } from '@angular/core';

/**
 * Generated class for the SiteItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'site-item',
  templateUrl: 'site-item.html'
})
export class SiteItemComponent {
  items: object[];

  constructor() {
    this.items = [{
      name: 'Hello World',
      url: '',
      icon: ''
    }, {
      name: 'Hello World',
      url: '',
      icon: ''
    }];
  }

}
