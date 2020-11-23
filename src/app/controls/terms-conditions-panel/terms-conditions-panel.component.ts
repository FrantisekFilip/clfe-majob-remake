import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions-panel',
  templateUrl: './terms-conditions-panel.component.html',
  styleUrls: ['./terms-conditions-panel.component.scss']
})
export class TermsConditionsPanelComponent implements OnInit {
  public expanded: boolean;

  ngOnInit(): void {
  }

  public isExpanded(): boolean {
    return this.expanded;
  }
}
