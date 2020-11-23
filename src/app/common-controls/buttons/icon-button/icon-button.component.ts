import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends ButtonDirective implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }
}
