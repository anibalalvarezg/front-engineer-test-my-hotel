import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hotels$?: Observable<IHotel[]>;
  searchTerms = new FormControl('');

  constructor(
    public hotelService: HotelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels();
    this.searchTerms.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.search(term);
    })
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

  search(term: string) {
    this.hotels$ = this.hotelService.searchHotel(term);
  }
}
