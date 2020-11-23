import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {
  @Input()
  public imageUrl: string;

  @Input()
  public selected: boolean;

  ngOnInit(): void {
  }
}
