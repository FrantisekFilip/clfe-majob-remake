import { Component, Input, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }
}
