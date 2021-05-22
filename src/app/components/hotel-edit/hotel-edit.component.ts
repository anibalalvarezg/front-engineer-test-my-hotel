import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent implements OnInit {
  hotel$?: Subscription;
  hotelId?: number;

  constructor(
    private hotelService: HotelService,
    private location: Location) { }

  ngOnInit(): void {
  }

  edit(hotel: IHotel) {
    this.hotelService.updateHotel(hotel).subscribe();
    this.location.back();
  }

}
