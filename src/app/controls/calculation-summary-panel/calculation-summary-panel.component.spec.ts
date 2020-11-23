import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSummaryPanelComponent } from './calculation-summary-panel.component';

describe('CalculationSummaryPanelComponent', () => {
  let component: CalculationSummaryPanelComponent;
  let fixture: ComponentFixture<CalculationSummaryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationSummaryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationSummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
