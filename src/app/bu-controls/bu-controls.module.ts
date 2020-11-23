import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CommonServicesModule } from '../common-services/common-services.module';
import { CommonControlsModule } from '../common-controls/common-controls.module';
import { BuServicesModule } from '../bu-services/bu-services.module';
import { ClientInfoPanelComponent } from './client-info-panel/client-info-panel.component';
import { ActiveAddressPanelComponent } from './active-address-panel/active-address-panel.component';
import { AddressPanelComponent } from './address-panel/address-panel.component';
import { AddressInfoPanelComponent } from './address-info-panel/address-info-panel.component';

@NgModule({
  declarations: [
    ClientInfoPanelComponent,
    AddressPanelComponent,
    ActiveAddressPanelComponent,
    AddressInfoPanelComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    CommonServicesModule,
    CommonControlsModule,
    BuServicesModule
  ],
  exports: [
    TranslateModule,
    CommonServicesModule,
    CommonControlsModule,
    BuServicesModule,
    ClientInfoPanelComponent,
    AddressPanelComponent,
    ActiveAddressPanelComponent,
    AddressInfoPanelComponent
  ]
})
export class BuControlsModule { }
