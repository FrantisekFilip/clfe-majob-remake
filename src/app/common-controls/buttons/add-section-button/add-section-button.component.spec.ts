import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionButtonComponent } from './add-section-button.component';

describe('AddSectionButtonComponent', () => {
  let component: AddSectionButtonComponent;
  let fixture: ComponentFixture<AddSectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
