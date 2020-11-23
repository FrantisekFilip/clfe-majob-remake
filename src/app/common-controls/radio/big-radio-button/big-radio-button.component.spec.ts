import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigRadioButtonComponent } from './big-radio-button.component';

describe('BigRadioButtonComponent', () => {
  let component: BigRadioButtonComponent;
  let fixture: ComponentFixture<BigRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
