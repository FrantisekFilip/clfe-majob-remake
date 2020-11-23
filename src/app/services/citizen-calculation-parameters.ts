import { TerritorialScaleModel } from '../bu-services/models/enumerations';
import { AggregateIndemnityModel, CoinsuranceModel } from '../models/enumerations';
import { CalculationParameters } from './calculation-parameters';

export interface CitizenCalculationParameters extends CalculationParameters {
     aggregateIndemnity: AggregateIndemnityModel;

     territorialScale: TerritorialScaleModel;

     coinsurance: CoinsuranceModel;

     discount: number;
}
