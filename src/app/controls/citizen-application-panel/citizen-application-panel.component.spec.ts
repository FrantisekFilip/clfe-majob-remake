import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplicationPanelComponent } from './citizen-application-panel.component';

describe('CitizenApplicationPanelComponent', () => {
  let component: CitizenApplicationPanelComponent;
  let fixture: ComponentFixture<CitizenApplicationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenApplicationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenApplicationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
