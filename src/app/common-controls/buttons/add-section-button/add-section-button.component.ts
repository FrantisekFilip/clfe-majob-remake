import { Component, Input, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-add-section-button',
  templateUrl: './add-section-button.component.html',
  styleUrls: ['./add-section-button.component.scss']
})
export class AddSectionButtonComponent extends ButtonDirective implements OnInit {
  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'add_circle' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
