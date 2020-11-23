import { Component, Input, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-remove-section-button',
  templateUrl: './remove-section-button.component.html',
  styleUrls: ['./remove-section-button.component.scss']
})
export class RemoveSectionButtonComponent extends ButtonDirective implements OnInit {
  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'remove_circle' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
