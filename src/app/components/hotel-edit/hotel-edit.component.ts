import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent implements OnInit {
  hotel$?: Observable<IHotel>;
  hotelId?: number;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location) { }

  ngOnInit(): void {
    this.hotelId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.hotel$ = this.hotelService.getHotel(this.hotelId);
  }

  edit(hotel: IHotel) {
    this.hotelService.updateHotel(hotel).subscribe();
    this.location.back();
  }

}
