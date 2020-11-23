import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-visit-page',
  templateUrl: './branch-visit-page.component.html',
  styleUrls: ['./branch-visit-page.component.scss']
})
export class BranchVisitPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    window.location.href = 'https://www.pvzp.cz/cs/';
  }

  public redirect(): void {
    window.location.href = 'https://www.pvzp.cz/cs/kde-nas-najdete/obchodni-mista-pvzp/';
  }
}
