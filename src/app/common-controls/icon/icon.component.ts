import { Component, Input, OnInit, Output } from '@angular/core';
import { AssetsManagerService } from '../services/assets-manager.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input()
  public icon: string;

  public get isSvgIcon(): boolean {
    if (this.icon) {
      return this.assetsManager.isSvgIcon(this.icon);
    }

    return false;
  }

  @Output()
  public get viewIcon(): string {
    return this.isSvgIcon ? null : this.icon;
  }

  constructor(private assetsManager: AssetsManagerService) { }

  ngOnInit(): void {
  }

}
