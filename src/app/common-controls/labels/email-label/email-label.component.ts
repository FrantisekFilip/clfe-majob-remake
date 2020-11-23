import { Component, Input, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { LabelDirective } from '../label.directive';

@Component({
  selector: 'app-email-label',
  templateUrl: './email-label.component.html',
  styleUrls: ['./email-label.component.scss']
})
export class EmailLabelComponent extends LabelDirective implements OnInit {
  @Input()
  public value: EmailModel;

  public get formatted(): string {
    return this.value?.value;
  }

  ngOnInit(): void {
  }
}
