import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrencyCLP'
})
export class CustomCurrencyCLPPipe implements PipeTransform {

  transform(value: number | undefined): string {
    return value ? '$' + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : '-';
  }

}
