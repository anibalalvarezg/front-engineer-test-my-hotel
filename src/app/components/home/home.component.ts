import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hotels$?: Observable<IHotel[]>;

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels();
  }

}
