import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CommonServicesModule } from 'src/app/common-services/common-services.module';
/** Buttons */
import { AddSectionButtonComponent } from './buttons/add-section-button/add-section-button.component';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { BigButtonComponent } from './buttons/big-button/big-button.component';
import { CollapseButtonComponent } from './buttons/collapse-button/collapse-button.component';
import { DownloadButtonComponent } from './buttons/download-button/download-button.component';
import { ExpandButtonComponent } from './buttons/expand-button/expand-button.component';
import { FlatButtonComponent } from './buttons/flat-button/flat-button.component';
import { HelpIconButtonComponent } from './buttons/help-icon-button/help-icon-button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { NextButtonComponent } from './buttons/next-button/next-button.component';
import { RemoveSectionButtonComponent } from './buttons/remove-section-button/remove-section-button.component';
import { StrokedButtonComponent } from './buttons/stroked-button/stroked-button.component';
import { ToggleButtonComponent } from './buttons/toggle-button/toggle-button.component';
/** Dialogs */
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
/** Forms */
import { BirthNumberFieldComponent } from './forms/birth-number-field/birth-number-field.component';
import { DateFieldComponent } from './forms/date-field/date-field.component';
import { EmailFieldComponent } from './forms/email-field/email-field.component';
import { PhoneNumberFieldComponent } from './forms/phone-number-field/phone-number-field.component';
import { SelectFieldComponent } from './forms/select-field/select-field.component';
import { SlideToggleFieldComponent } from './forms/slide-toggle-field/slide-toggle-field.component';
import { TextFieldComponent } from './forms/text-field/text-field.component';
/** Labels */
import { CheckboxLabelComponent } from './labels/checkbox-label/checkbox-label.component';
import { DateLabelComponent } from './labels/date-label/date-label.component';
import { EmailLabelComponent } from './labels/email-label/email-label.component';
import { EnumerationLabelComponent } from './labels/enumeration-label/enumeration-label.component';
import { IconLabelComponent } from './labels/icon-label/icon-label.component';
import { MoneyLabelComponent } from './labels/money-label/money-label.component';
import { PercentLabelComponent } from './labels/percent-label/percent-label.component';
import { PhoneNumberLabelComponent } from './labels/phone-number-label/phone-number-label.component';
import { TextLabelComponent } from './labels/text-label/text-label.component';
import { TranslatedLabelComponent } from './labels/translated-label/translated-label.component';
/** Radio */
import { BigRadioButtonComponent } from './radio/big-radio-button/big-radio-button.component';
/** Stepper */
import { StepperBackDirective } from './stepper/stepper-back.directive';
import { StepperNextDirective } from './stepper/stepper-next.directive';
import { StepperNextButtonComponent } from './stepper/stepper-next-button/stepper-next-button.component';
import { StepperBackButtonComponent } from './stepper/stepper-back-button/stepper-back-button.component';
import { StepperButtonsComponent } from './stepper/stepper-buttons/stepper-buttons.component';
import { VerticalStepperComponent } from './stepper/vertical-stepper/vertical-stepper.component';
import { VerticalStepperHeaderButtonComponent } from './stepper/vertical-stepper-header-button/vertical-stepper-header-button.component';
/** Pipes */
import { RichTranslatePipe } from './pipes/rich-translate.pipe';
/**  Other */
import { CheckBoxComponent } from './check-box/check-box.component';
import { IconComponent } from './icon/icon.component';
/** Uncategorized */

@NgModule({
  declarations: [
    AddSectionButtonComponent,
    BackButtonComponent,
    BigButtonComponent,
    CollapseButtonComponent,
    DownloadButtonComponent,
    ExpandButtonComponent,
    FlatButtonComponent,
    HelpIconButtonComponent,
    IconButtonComponent,
    NextButtonComponent,
    RemoveSectionButtonComponent,
    StrokedButtonComponent,
    ToggleButtonComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    BirthNumberFieldComponent,
    DateFieldComponent,
    EmailFieldComponent,
    PhoneNumberFieldComponent,
    SelectFieldComponent,
    SlideToggleFieldComponent,
    TextFieldComponent,
    CheckboxLabelComponent,
    DateLabelComponent,
    EmailLabelComponent,
    EnumerationLabelComponent,
    IconLabelComponent,
    MoneyLabelComponent,
    PercentLabelComponent,
    PhoneNumberLabelComponent,
    TextLabelComponent,
    TranslatedLabelComponent,
    BigRadioButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent,
    VerticalStepperComponent,
    VerticalStepperHeaderButtonComponent,
    RichTranslatePipe,
    CheckBoxComponent,
    IconButtonComponent,
    StepperBackDirective,
    StepperNextDirective,
    HelpIconButtonComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatCommonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    FlexModule,
    CommonServicesModule
  ],
  exports: [
    TranslateModule,
    CommonServicesModule,
    AddSectionButtonComponent,
    BackButtonComponent,
    BigButtonComponent,
    CollapseButtonComponent,
    DownloadButtonComponent,
    ExpandButtonComponent,
    FlatButtonComponent,
    HelpIconButtonComponent,
    IconButtonComponent,
    NextButtonComponent,
    RemoveSectionButtonComponent,
    StrokedButtonComponent,
    ToggleButtonComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    BirthNumberFieldComponent,
    CheckboxLabelComponent,
    DateFieldComponent,
    EmailFieldComponent,
    PhoneNumberFieldComponent,
    SelectFieldComponent,
    SlideToggleFieldComponent,
    TextFieldComponent,
    DateLabelComponent,
    EmailLabelComponent,
    EnumerationLabelComponent,
    IconLabelComponent,
    MoneyLabelComponent,
    PercentLabelComponent,
    PhoneNumberLabelComponent,
    TextLabelComponent,
    TranslatedLabelComponent,
    BigRadioButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent,
    VerticalStepperComponent,
    VerticalStepperHeaderButtonComponent,
    RichTranslatePipe,
    CheckBoxComponent,
    IconComponent
  ],
})
export class CommonControlsModule {
  static forRoot(): ModuleWithProviders<CommonControlsModule> {
    return {
      ngModule: CommonControlsModule,
      providers: [RichTranslatePipe],
    };
  }
}
