import { EnumerationModel } from './../../common-services/models/enumeration-model';

export class TerritorialScaleModel extends EnumerationModel {
    value: string;
}

export class InstalmentFrequencyModel extends EnumerationModel {
    public static yearlyCode = 'ins-yearly';

    paymentsPerYear: number;
}

export class ContractDurationModel extends EnumerationModel {
    public static indefiniteCode = 'indefinite';
}

