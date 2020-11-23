import { Component, Input, OnInit } from '@angular/core';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { MoneyModel } from 'src/app/common-services/models/money-model';

@Component({
  selector: 'app-product-summary-panel',
  templateUrl: './product-summary-panel.component.html',
  styleUrls: ['./product-summary-panel.component.scss']
})
export class ProductSummaryPanelComponent extends FormPanelDirective implements OnInit {
  @Input()
  public discount: number;

  @Input()
  public yearlyInsurance: MoneyModel;

  ngOnInit(): void {
    super.ngOnInit();
  }

}
