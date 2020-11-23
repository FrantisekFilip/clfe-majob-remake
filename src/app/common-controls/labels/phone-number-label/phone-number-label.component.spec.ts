import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberLabelComponent } from './phone-number-label.component';

describe('PhoneNumberLabelComponent', () => {
  let component: PhoneNumberLabelComponent;
  let fixture: ComponentFixture<PhoneNumberLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
