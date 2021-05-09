import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kaw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'kaw';
}
