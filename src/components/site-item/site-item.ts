import { Component, Input } from '@angular/core';

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
  // private static parentStacks: object[];
  @Input() item: object;
  @Input() parent: object;
  
  constructor() {

  }

}
