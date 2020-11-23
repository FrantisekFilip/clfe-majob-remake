import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationButtonDirective } from '../navigation-button.directive';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent extends NavigationButtonDirective implements OnInit {
  constructor(router: Router) {
    super(router);
  }

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'west' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
