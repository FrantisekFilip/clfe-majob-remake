import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentLabelComponent } from './percent-label.component';

describe('PercentLabelComponent', () => {
  let component: PercentLabelComponent;
  let fixture: ComponentFixture<PercentLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
