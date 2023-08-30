import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dynamic-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss'],
})
export class FormRendererComponent {
  @Input() form;
  @Input() submission;
  @Input() readOnly;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  onSubmit(event) {
    this.submit.emit(event);
  }
}
