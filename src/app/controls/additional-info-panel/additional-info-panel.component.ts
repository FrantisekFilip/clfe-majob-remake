import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { AgreementsModel } from 'src/app/models/agreements-model';
import { ApplicationModel } from 'src/app/models/application-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-additional-info-panel',
  templateUrl: './additional-info-panel.component.html',
  styleUrls: ['./additional-info-panel.component.scss']
})
export class AdditionalInfoPanelComponent extends FormPanelDirective implements OnInit {
  private readonly _model: ApplicationModel;

  public get commencementDate(): Date {
    return this._model.commencementDate;
  }

  public set commencementDate(value: Date) {
    this._model.commencementDate = value;
  }

  public get policyHolder(): ClientInfoModel {
    return this._model.policyHolder;
  }

  public set policyHolder(value: ClientInfoModel) {
    this._model.policyHolder = value;
  }

  public get mainAddress(): AddressModel {
    return this._model.mainAddress;
  }

  public set mainAddress(value: AddressModel) {
    this._model.mainAddress = value;
  }

  public get hasContactAddress(): boolean {
    return (this._model.contactAddress?.doApply) ?? false;
  }

  public set hasContactAddress(value: boolean) {
    if (value === true) {
      if (this._model.contactAddress) {
        this._model.contactAddress.doApply = true;
      }
      else {
        this._model.contactAddress = new AddressModel();
      }
    }
    else {
      if (this._model.contactAddress) {
        this._model.contactAddress.doApply = false;
      }
    }
  }

  public get contactAddress(): AddressModel {
    return this._model.contactAddress;
  }

  public get hasInsuredPerson(): boolean {
    return (this._model.insuredPerson?.doApply) ?? false;
  }

  public set hasInsuredPerson(value: boolean) {
    if (value === true) {
      if (this._model.insuredPerson) {
        this._model.insuredPerson.doApply = true;
      }
      else {
        this._model.insuredPerson = new ClientInfoModel();
      }
    }
    else {
      if (this._model.insuredPerson) {
        this._model.insuredPerson.doApply = false;
      }
    }
  }

  public get insuredPerson(): ClientInfoModel {
    return this._model.insuredPerson;
  }

  public get agreements(): AgreementsModel {
    return this._model.agreements;
  }

  public get agreementsAccepted(): boolean {
    return this._model.agreementsAccepted;
  }

  public set agreementsAccepted(value: boolean) {
    this._model.agreementsAccepted = value;
  }

  public get contactMethodsAllowed(): boolean {
    return this._model.contactMethodsAllowed;
  }

  public set contactMethodsAllowed(value: boolean) {
    this._model.contactMethodsAllowed = value;
  }

  @Input()
  public title: string;

  constructor(dataService: ApplicationDataService) {
    super();
    this._model = dataService.application;

    if (!this._model.policyHolder) {
      this._model.policyHolder = new ClientInfoModel();
    }

    if (!this._model.mainAddress) {
      this._model.mainAddress = new AddressModel();
    }
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'additionalInfoPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onContactAddressCheckedChange(value: boolean): void {
    this.hasContactAddress = value;
  }

  public onInsuredPersonCheckedChange(value: boolean): void {
    this.hasInsuredPerson = value;
  }
}
