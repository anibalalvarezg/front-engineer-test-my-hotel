import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  readonly REGEX_NUMBERS = /^[0-9]*$/;

  constructor(
    private ngControl: NgControl,
    private elementRef: ElementRef
  ) { }

  @HostListener('keyup', ['$event'])
  public onEvent($event: KeyboardEvent): void {
    const value = this.elementRef.nativeElement.value.replace(/[^0-9]/g, '');
    if (value && this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValue(value.replace(/\B(?=(\d{3})+(?!\d))/g, "."));
    }

  }
}

