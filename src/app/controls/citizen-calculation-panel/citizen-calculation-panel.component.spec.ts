import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenCalculationPanelComponent } from './citizen-calculation-panel.component';

describe('CitizenCalculationPanelComponent', () => {
  let component: CitizenCalculationPanelComponent;
  let fixture: ComponentFixture<CitizenCalculationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenCalculationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenCalculationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
