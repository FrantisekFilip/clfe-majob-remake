import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Directive()
export abstract class FormPanelDirective implements OnInit {
  private _controlName: string;

  public get controlName(): string {
    return this._controlName;
  }

  @Input()
  public parentForm: FormGroup;

  public readonly panelControl: FormGroup;

  constructor() {
    this.panelControl = new FormGroup({});
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: '' };
  }

  public ngOnInit(): void {
    const metadata = this.OnConstruct();
    this._controlName = metadata.controlName;

    if (metadata.controls) {
      for (const control of metadata.controls) {
        this.panelControl.addControl('', null); // TODO - fixit
      }
    }

    this.parentForm.addControl(this.controlName, this.panelControl);
  }
}
