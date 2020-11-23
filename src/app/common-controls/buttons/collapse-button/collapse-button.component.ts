import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.scss']
})
export class CollapseButtonComponent extends ButtonDirective implements OnInit {

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'arrow_drop_up' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
