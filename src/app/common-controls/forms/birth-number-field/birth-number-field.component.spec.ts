import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthNumberFieldComponent } from './birth-number-field.component';

describe('BirthNumberFieldComponent', () => {
  let component: BirthNumberFieldComponent;
  let fixture: ComponentFixture<BirthNumberFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthNumberFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
