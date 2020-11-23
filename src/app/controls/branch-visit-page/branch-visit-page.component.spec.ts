import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchVisitPageComponent } from './branch-visit-page.component';

describe('BranchVisitPageComponent', () => {
  let component: BranchVisitPageComponent;
  let fixture: ComponentFixture<BranchVisitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchVisitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchVisitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
