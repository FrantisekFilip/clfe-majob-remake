import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addinfo-terms-download',
  templateUrl: './addinfo-terms-download.component.html',
  styleUrls: ['./addinfo-terms-download.component.scss']
})
export class AddinfoTermsDownloadComponent implements OnInit {
  @Input()
  public checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
