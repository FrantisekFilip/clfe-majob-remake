import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSectionButtonComponent } from './remove-section-button.component';

describe('RemoveSectionButtonComponent', () => {
  let component: RemoveSectionButtonComponent;
  let fixture: ComponentFixture<RemoveSectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveSectionButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
