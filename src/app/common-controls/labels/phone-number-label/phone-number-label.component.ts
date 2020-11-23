import { Component, Input, OnInit } from '@angular/core';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-phone-number-label',
  templateUrl: './phone-number-label.component.html',
  styleUrls: ['./phone-number-label.component.scss']
})
export class PhoneNumberLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: PhoneNumberModel;

  public get formatted(): string {
    return this.value?.value;
  }

  ngOnInit(): void {
  }
}
