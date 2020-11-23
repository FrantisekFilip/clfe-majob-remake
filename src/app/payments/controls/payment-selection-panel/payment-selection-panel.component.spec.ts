import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSelectionPanelComponent } from './payment-selection-panel.component';

describe('PaymentSelectionPanelComponent', () => {
  let component: PaymentSelectionPanelComponent;
  let fixture: ComponentFixture<PaymentSelectionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSelectionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSelectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
