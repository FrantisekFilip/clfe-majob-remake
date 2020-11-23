import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoPanelComponent } from './additional-info-panel.component';

describe('AdditionalInfoPanelComponent', () => {
  let component: AdditionalInfoPanelComponent;
  let fixture: ComponentFixture<AdditionalInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
