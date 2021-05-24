import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHotel } from 'src/app/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
})
export class HotelFormComponent implements OnInit, OnDestroy {

  @Input() hotelId!: number;
  @Output() hotelEmit = new EventEmitter<IHotel>();

  readonly REGEX_NUMBERS = /^[0-9\.]*$/;

  hotel$?: Subscription;

  editForm = this.fb.group({
    name: ['', Validators.required],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    price: ['', [Validators.required]],
    wifi: [false],
    parking: [false],
    pool: [false],
  });

  editFormControls = {
    name: this.editForm.get('name'),
    rating: this.editForm.get('rating'),
    price: this.editForm.get('price'),
    wifi: this.editForm.get('wifi'),
    parking: this.editForm.get('parking'),
    pool: this.editForm.get('pool'),
  };

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.hotelId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if (this.hotelId) {
      this.hotel$ = this.hotelService.getHotel(this.hotelId).subscribe((hotel: IHotel) => {
        const { name, rating, price, additionalServices } = hotel;
        this.editFormControls.name?.setValue(name);
        this.editFormControls.rating?.setValue(rating);
        this.editFormControls.price?.setValue(String(price).replace(/\B(?=(\d{3})+(?!\d))/g, "."));
        if (additionalServices?.length) {
          this.editFormControls.wifi?.setValue(Boolean(additionalServices[0]));
          this.editFormControls.parking?.setValue(Boolean(additionalServices[1]));
          this.editFormControls.pool?.setValue(Boolean(additionalServices[2]));
        }
      });
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.editForm.valid) {
      const { name, rating, price, wifi, parking, pool } = this.editForm.value;
      const hotel: IHotel = {
        id: this.hotelId,
        name: name.trim(),
        rating,
        price: price.replace('.', ''),
        additionalServices: [+wifi, +parking, +pool],
        createdAt: new Date(Date.now()).toISOString(),
      };

      this.hotelEmit.next(hotel);
    } else {
      this.editForm.markAllAsTouched();
    }
  }

  validateInputWithRegex($event: KeyboardEvent, regex: RegExp | string, match = true): void {
    const matchCondition = match ? $event.key.match(regex) : !$event.key.match(regex);
    if (matchCondition && $event.key !== 'Backspace') {
      $event.preventDefault();
    }
  }

  ngOnDestroy() {
    this.hotel$?.unsubscribe();
  }
}
