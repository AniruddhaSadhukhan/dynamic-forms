import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { options } from './options';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() initialForm: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  options: any;

  form: Object = { components: [] };

  generatedForm: Object;

  constructor() {
    this.options = options;
  }

  ngOnInit(): void {
    if (this.initialForm?.components?.length) {
      this.form = this.initialForm;
    }
    this.generatedForm = this.initialForm;
  }

  onChange(event) {
    this.generatedForm = event.form;
  }

  saveForm() {
    this.save.emit(this.generatedForm);
  }
}
