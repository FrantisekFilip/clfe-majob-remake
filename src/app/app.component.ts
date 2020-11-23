import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { ContractDurationModel, InstalmentFrequencyModel, TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { AggregateIndemnityModel, CoinsuranceModel, EmployeeCoinsuranceModel } from './models/enumerations';
import { MoneyModel } from './common-services/models/money-model';
import { AssetsManagerService } from './common-controls/services/assets-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CLFE-Majob';

  constructor(
    readonly translate: TranslateService,
    assetsManager: AssetsManagerService,
    enumerations: EnumerationsService) {
    {
      // const language: string = this.translate.getBrowserLang(); // TODO - activate after proper init is implemented
      const language = 'cs';
      translate.setDefaultLang(language);
      translate.use(language);
      assetsManager.addSvgIcon('download_icon', '../assets/icons/download_icon.svg');

      InstalmentFrequencyModel.yearlyCode = 'ins-yearly';
      enumerations.setModelValues(InstalmentFrequencyModel, [
        { code: 'ins-monthly', viewValue: 'měsíční', paymentsPerYear: 12 },
        { code: 'ins-half-yearly', viewValue: 'pololetní', paymentsPerYear: 2 },
        { code: 'ins-quarterly', viewValue: 'čtvrtletní', paymentsPerYear: 4 },
        { code: InstalmentFrequencyModel.yearlyCode, viewValue: 'roční', paymentsPerYear: 1 }
      ]);
      enumerations.setModelValues(TerritorialScaleModel, [
        { code: 'europe', viewValue: 'Evropa', value: 'Evropa' },
        { code: 'world', viewValue: 'Svět', value: 'Svět' }
      ]);
      enumerations.setModelValues(AggregateIndemnityModel, [
        { code: 'ai-2', viewValue: '2 000 000 Kč', value: MoneyModel.Create(2000000) },
        { code: 'ai-4', viewValue: '4 000 000 Kč', value: MoneyModel.Create(4000000) },
        { code: 'ai-5', viewValue: '5 000 000 Kč', value: MoneyModel.Create(5000000) },
        { code: 'ai-10', viewValue: '10 000 000 Kč', value: MoneyModel.Create(10000000) },
        { code: 'ai-25', viewValue: '25 000 000 Kč', value: MoneyModel.Create(25000000) }
      ]);
      enumerations.setModelValues(CoinsuranceModel, [
        { code: 'coin-1', viewValue: '1 000 Kč', value: MoneyModel.Create(1000) },
        { code: 'coin-2', viewValue: '2 000 Kč', value: MoneyModel.Create(2000) },
        { code: 'coin-3', viewValue: '3 000 Kč', value: MoneyModel.Create(3000) },
        { code: 'coin-4', viewValue: '4 000 Kč', value: MoneyModel.Create(4000) },
        { code: 'coin-5', viewValue: '5 000 Kč', value: MoneyModel.Create(5000) }
      ]);
      enumerations.setModelValues(EmployeeCoinsuranceModel, [
        {
          code: 'ecoin-1', viewValue: '0 Kč pro škody hrazené do výše spoluúčasti z havarijního pojištění (motokolo, motocykl, osobní a nákladní automobil, traktor a autobus \n 1 000 Kč pro ostatní škody'
        }
      ]);
      enumerations.setModelValues(ContractDurationModel, [
        { code: ContractDurationModel.indefiniteCode, viewValue: 'smlouva na dobu neurčitou' },
        { code: 'fixed', viewValue: 'smlouva na dobu určitou' },
      ]);
    }
  }
}
