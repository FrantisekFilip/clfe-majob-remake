import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAddressPanelComponent } from './active-address-panel.component';

describe('ActiveAddressPanelComponent', () => {
  let component: ActiveAddressPanelComponent;
  let fixture: ComponentFixture<ActiveAddressPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAddressPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAddressPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
