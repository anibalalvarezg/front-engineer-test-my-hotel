import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
})
export class HotelEditComponent implements OnDestroy {
  subscription: Subscription[] = [];

  constructor(
    private hotelService: HotelService,
    private location: Location) { }

  edit(hotel: IHotel) {
    this.subscription.push(this.hotelService.updateHotel(hotel).subscribe());
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.forEach(subs => subs.unsubscribe());
  }
}
