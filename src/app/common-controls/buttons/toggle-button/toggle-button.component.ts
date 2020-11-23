import { Component, Input, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }
}

