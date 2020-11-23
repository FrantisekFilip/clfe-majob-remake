import { Directive, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from './button.directive';

@Directive()
export abstract class NavigationButtonDirective extends ButtonDirective implements OnInit {
  @Input()
  public redirectTo: string;

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.action = () => {
      this.redirect();
    };
  }

  private redirect(): void {
    if (this.redirectTo) {
      this.router.navigate([this.redirectTo]);
    }
  }
}
