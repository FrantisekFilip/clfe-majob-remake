import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedLabelComponent } from './translated-label.component';

describe('TranslatedLabelComponent', () => {
  let component: TranslatedLabelComponent;
  let fixture: ComponentFixture<TranslatedLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
