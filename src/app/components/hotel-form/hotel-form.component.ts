import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IHotel } from 'src/app/interfaces';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {

  @Input() hotelId!: number;
  @Output() hotelEmit = new EventEmitter<IHotel>();

  editForm = this.fb.group({
    name: ['', Validators.required],
    rating: ['', Validators.required],
    price: ['', Validators.required],
    wifi: [false],
    parking: [false],
    laundry: [false],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const { name, rating, price, wifi, parking, laundry } = this.editForm.value;

    const hotel: IHotel = {
      id: this.hotelId,
      name,
      rating,
      price,
      additionalServices: [+wifi, +parking, +laundry],
      createdAt: new Date(Date.now()).toISOString(),
    };

    this.hotelEmit.next(hotel);
  }

}
