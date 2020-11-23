import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnumerationModel } from 'src/app/common-services/models/enumeration-model';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent extends FormFieldDirective implements OnInit {
  @Input()
  public options: EnumerationModel[];

  @Input()
  public selected: string;

  @Output()
  public readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    super.ngOnInit();

    if (this.selected) {
      this.fieldControl.setValue(this.selected);
    }
  }

  public onChange(value: any): void {
    this.valueChange.emit(value);
  }
}
