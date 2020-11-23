import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _lock: boolean;

  constructor() {
  }

  private notLocked(): boolean {
    return !this._lock;
  }

  public lock(): void {
    this._lock = true;
  }
}
