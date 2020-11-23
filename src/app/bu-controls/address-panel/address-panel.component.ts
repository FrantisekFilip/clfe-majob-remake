import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';

@Component({
  selector: 'app-address-panel',
  templateUrl: './address-panel.component.html',
  styleUrls: ['./address-panel.component.scss']
})
export class AddressPanelComponent extends FormPanelDirective implements OnInit {
  private _address: AddressModel;

  @Input()
  public header: string;

  get address(): AddressModel {
    return this._address;
  }

  @Input()
  set address(value: AddressModel) {
    this._address = value;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'addressPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
