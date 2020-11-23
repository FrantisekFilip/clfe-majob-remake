import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoPanelComponent } from './client-info-panel.component';

describe('ClientInfoPanelComponent', () => {
  let component: ClientInfoPanelComponent;
  let fixture: ComponentFixture<ClientInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
