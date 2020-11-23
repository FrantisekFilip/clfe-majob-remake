import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressPaymentButtonComponent } from './express-payment-button.component';

describe('ExpressPaymentButtonComponent', () => {
  let component: ExpressPaymentButtonComponent;
  let fixture: ComponentFixture<ExpressPaymentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressPaymentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressPaymentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
