import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../button.directive';

@Component({
  selector: 'app-expand-button',
  templateUrl: './expand-button.component.html',
  styleUrls: ['./expand-button.component.scss']
})
export class ExpandButtonComponent extends ButtonDirective implements OnInit {

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'arrow_drop_down' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}