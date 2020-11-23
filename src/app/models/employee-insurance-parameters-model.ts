import { TerritorialScaleModel } from '../bu-services/models/enumerations';
import { MoneyModel } from '../common-services/models/money-model';
import { ProductInfo } from 'src/app/products/services/product-info';
import { EmployeeCalculationParameters } from '../services/employee-calculation-parameters';
import { ContractParametersModel } from './contract-parameters-model';
import { AggregateIndemnityModel, EmployeeCoinsuranceModel } from './enumerations';

export class EmployeeInsuranceParametersModel extends ContractParametersModel implements EmployeeCalculationParameters {
    public aggregateIndemnity: AggregateIndemnityModel;

    public territorialScale: TerritorialScaleModel;

    public entrustedThingsLossLimit: MoneyModel;

    public mainVehicleChecked: boolean;

    public otherVehiclesChecked: boolean;

    public noClaimBonus: boolean;

    public coinsurance: EmployeeCoinsuranceModel;

    public discount: number;

    public yearlyInsurance: MoneyModel;

    constructor(product: ProductInfo) {
        super(product);
    }
}
