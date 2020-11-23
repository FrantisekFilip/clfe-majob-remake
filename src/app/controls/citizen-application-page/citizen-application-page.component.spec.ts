import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplicationPageComponent } from './citizen-application-page.component';

describe('CitizenApplicationPageComponent', () => {
  let component: CitizenApplicationPageComponent;
  let fixture: ComponentFixture<CitizenApplicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenApplicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
