import { Component, Input, OnInit } from '@angular/core';
import { EnumerationModel } from 'src/app/common-services/models/enumeration-model';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-enumeration-label',
  templateUrl: './enumeration-label.component.html',
  styleUrls: ['./enumeration-label.component.scss']
})
export class EnumerationLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: EnumerationModel;

  public get formatted(): string {
    return this.value?.viewValue;
  }

  ngOnInit(): void {
  }
}
