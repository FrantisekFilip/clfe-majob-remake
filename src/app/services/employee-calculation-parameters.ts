import { TerritorialScaleModel } from '../bu-services/models/enumerations';
import { MoneyModel } from '../common-services/models/money-model';
import { AggregateIndemnityModel } from '../models/enumerations';
import { CalculationParameters } from './calculation-parameters';

export interface EmployeeCalculationParameters extends CalculationParameters {
    aggregateIndemnity: AggregateIndemnityModel;

    territorialScale: TerritorialScaleModel;

    entrustedThingsLossLimit: MoneyModel;

    noClaimBonus: boolean;

    discount: number;
}
