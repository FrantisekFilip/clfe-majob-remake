import { EnumerationModel } from '../common-services/models/enumeration-model';
import { MoneyModel } from '../common-services/models/money-model';

export class AggregateIndemnityModel extends EnumerationModel {
    value: MoneyModel;
}

export class CoinsuranceModel extends EnumerationModel {
    value: MoneyModel;
}

export class EmployeeCoinsuranceModel extends EnumerationModel {
}
