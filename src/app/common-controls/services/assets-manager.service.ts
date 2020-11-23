import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AssetsManagerService {
  private readonly svgIcons: string[] = [];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  public addSvgIcon(icon: string, url: string): void {
    this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(url));
    this.svgIcons.push(icon);
  }

  public isSvgIcon(icon: string): boolean {
    return this.svgIcons.some((i) => i === icon);
  }
}
