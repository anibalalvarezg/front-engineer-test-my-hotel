import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.scss']
})
export class HotelCreateComponent implements OnInit {

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  create(hotel: IHotel) {
    this.hotelService.addHotel(hotel).subscribe();
  }
}
