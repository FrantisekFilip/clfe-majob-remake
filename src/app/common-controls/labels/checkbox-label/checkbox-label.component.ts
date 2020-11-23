import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-label',
  templateUrl: './checkbox-label.component.html',
  styleUrls: ['./checkbox-label.component.scss']
})
export class CheckboxLabelComponent implements OnInit {

  @Input()
  public checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
