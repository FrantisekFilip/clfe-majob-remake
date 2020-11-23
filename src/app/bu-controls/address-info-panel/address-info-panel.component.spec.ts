import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoPanelComponent } from './address-info-panel.component';

describe('AddressInfoPanelComponent', () => {
  let component: AddressInfoPanelComponent;
  let fixture: ComponentFixture<AddressInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
