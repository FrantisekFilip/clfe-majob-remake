import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCalculationPanelComponent } from './employee-calculation-panel.component';

describe('EmployeeCalculationPanelComponent', () => {
  let component: EmployeeCalculationPanelComponent;
  let fixture: ComponentFixture<EmployeeCalculationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCalculationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCalculationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
