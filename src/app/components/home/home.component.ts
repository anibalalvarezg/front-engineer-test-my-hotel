import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    public hotelService: HotelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels();
  }

  editHotel(hotelId?: number | null) {
    if (!hotelId) return;
    this.router.navigate(['/edit', hotelId]);
  }

  deleteHotel(hotelId?: number | null) {
    if (!hotelId) return;
    this.hotelService.deleteHotel(hotelId).subscribe();
    this.hotels$ = this.hotelService.getHotels();
  }
}
