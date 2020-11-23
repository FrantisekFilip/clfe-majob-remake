import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfoTermsDownloadComponent } from './addinfo-terms-download.component';

describe('AddinfoTermsDownloadComponent', () => {
  let component: AddinfoTermsDownloadComponent;
  let fixture: ComponentFixture<AddinfoTermsDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinfoTermsDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfoTermsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
