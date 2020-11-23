import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryPanelComponent } from './product-summary-panel.component';

describe('ProductSummaryPanelComponent', () => {
  let component: ProductSummaryPanelComponent;
  let fixture: ComponentFixture<ProductSummaryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSummaryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
