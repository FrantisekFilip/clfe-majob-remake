import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsPanelComponent } from './terms-conditions-panel.component';

describe('TermsConditionsPanelComponent', () => {
  let component: TermsConditionsPanelComponent;
  let fixture: ComponentFixture<TermsConditionsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsConditionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsConditionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
