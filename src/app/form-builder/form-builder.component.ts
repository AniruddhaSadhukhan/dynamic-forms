import { Component } from '@angular/core';
import { options } from './options';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {

  form: Object = { components: [] };
  options:any

  constructor(){
    this.options = options
  }
}
