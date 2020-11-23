import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.scss']
})
export class StrokedButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
  }

}
