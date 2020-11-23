import { Component, Input, ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-big-radio-button',
  templateUrl: './big-radio-button.component.html',
  styleUrls: ['./big-radio-button.component.scss']
})
export class BigRadioButtonComponent {
  @ViewChild('radioButton')
  public radioButton: MatRadioButton;

  public get selected(): boolean {
    return this.radioButton?.checked;
  }

  @Input()
  public value: string;

  @Input()
  public image: string;
}
