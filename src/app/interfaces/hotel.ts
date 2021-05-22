export interface IHotel {
  id: number;
  name: string;
  rating: number;
  price: number;
  createdAt: string;
  additionalServices?: number[];
}
