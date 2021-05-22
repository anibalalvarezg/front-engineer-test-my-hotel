import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {

  @Input() hotelId!: number;
  @Output() hotelEmit = new EventEmitter<IHotel>();

  hotel$?: Subscription;

  editForm = this.fb.group({
    name: ['', Validators.required],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    price: ['', [Validators.required, Validators.min(0)]],
    wifi: [false],
    parking: [false],
    laundry: [false],
  });

  editFormControls = {
    name: this.editForm.get('name'),
    rating: this.editForm.get('rating'),
    price: this.editForm.get('price'),
    wifi: this.editForm.get('wifi'),
    parking: this.editForm.get('parking'),
    laundry: this.editForm.get('laundry'),
  };

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.hotelId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.hotel$ = this.hotelService.getHotel(this.hotelId).subscribe((hotel: IHotel) => {
      const { name, rating, price, additionalServices } = hotel;
      this.editFormControls.name?.setValue(name);
      this.editFormControls.rating?.setValue(rating);
      this.editFormControls.price?.setValue(price);
      if (additionalServices?.length) {
        this.editFormControls.wifi?.setValue(Boolean(additionalServices[0]));
        this.editFormControls.parking?.setValue(Boolean(additionalServices[1]));
        this.editFormControls.laundry?.setValue(Boolean(additionalServices[2]));
      }
    });
  }

  onSubmit() {
    if (!this.editForm.valid) { return; }
    const { name, rating, price, wifi, parking, laundry } = this.editForm.value;
    const hotel: IHotel = {
      id: this.hotelId,
      name: name.trim(),
      rating,
      price,
      additionalServices: [+wifi, +parking, +laundry],
      createdAt: new Date(Date.now()).toISOString(),
    };

    this.hotelEmit.next(hotel);
  }

}
