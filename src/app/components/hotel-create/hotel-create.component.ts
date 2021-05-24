import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
})
export class HotelCreateComponent implements OnDestroy {

  subscription: Subscription[] = [];

  constructor(
    private hotelService: HotelService,
    private router: Router,
  ) { }

  create(hotel: IHotel) {
    this.subscription.push(this.hotelService.addHotel(hotel).subscribe());
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.subscription.forEach(subs => subs.unsubscribe());
  }
}
