import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplicationPanelComponent } from './employee-application-panel.component';

describe('EmployeeApplicationPanelComponent', () => {
  let component: EmployeeApplicationPanelComponent;
  let fixture: ComponentFixture<EmployeeApplicationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeApplicationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeApplicationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
