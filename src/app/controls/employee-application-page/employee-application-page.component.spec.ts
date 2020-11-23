import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplicationPageComponent } from './employee-application-page.component';

describe('EmployeeApplicationPageComponent', () => {
  let component: EmployeeApplicationPageComponent;
  let fixture: ComponentFixture<EmployeeApplicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeApplicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
