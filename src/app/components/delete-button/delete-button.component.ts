import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
})
export class DeleteButtonComponent {
  @Output() clickHandler = new EventEmitter<boolean>();
}
