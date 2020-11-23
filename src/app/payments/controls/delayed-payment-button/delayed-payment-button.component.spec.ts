import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedPaymentButtonComponent } from './delayed-payment-button.component';

describe('DelayedPaymentButtonComponent', () => {
  let component: DelayedPaymentButtonComponent;
  let fixture: ComponentFixture<DelayedPaymentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedPaymentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedPaymentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
