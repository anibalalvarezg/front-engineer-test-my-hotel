import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.scss']
})
export class HotelCreateComponent {

  constructor(
    private hotelService: HotelService,
    private router: Router,
  ) { }

  create(hotel: IHotel) {
    this.hotelService.addHotel(hotel).subscribe();
    this.router.navigate(['/home']);
  }
}
