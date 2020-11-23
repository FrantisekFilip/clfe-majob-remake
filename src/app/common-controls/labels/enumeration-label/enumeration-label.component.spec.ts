import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumerationLabelComponent } from './enumeration-label.component';

describe('EnumerationLabelComponent', () => {
  let component: EnumerationLabelComponent;
  let fixture: ComponentFixture<EnumerationLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumerationLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumerationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
