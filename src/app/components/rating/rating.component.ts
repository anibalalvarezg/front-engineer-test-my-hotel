import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent {

  @Input() rating = 0;

}
