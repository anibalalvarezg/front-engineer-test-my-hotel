import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
})
export class EditButtonComponent {
  @Output() clickHandler = new EventEmitter<boolean>();
}
