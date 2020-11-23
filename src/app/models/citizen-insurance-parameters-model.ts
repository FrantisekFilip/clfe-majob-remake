import { TerritorialScaleModel } from '../bu-services/models/enumerations';
import { MoneyModel } from '../common-services/models/money-model';
import { ProductInfo } from 'src/app/products/services/product-info';
import { CitizenCalculationParameters } from '../services/citizen-calculation-parameters';
import { ContractParametersModel } from './contract-parameters-model';
import { AggregateIndemnityModel, CoinsuranceModel } from './enumerations';

export class CitizenInsuranceParametersModel extends ContractParametersModel implements CitizenCalculationParameters {
    public aggregateIndemnity: AggregateIndemnityModel;

    public territorialScale: TerritorialScaleModel;

    public coinsurance: CoinsuranceModel;

    public discount: number;

    public yearlyInsurance: MoneyModel;

    constructor(product: ProductInfo) {
        super(product);
    }
}
