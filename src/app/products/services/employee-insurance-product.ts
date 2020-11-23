import { ProductInfo } from './product-info';
import { Product } from './product';
import { Money } from 'src/app/common-services/types/money';

export class EmployeeInsuranceProduct extends Product implements ProductInfo {
    public static readonly productCode = 'employeeInsurance';

    public get code(): string {
        return EmployeeInsuranceProduct.productCode;
    }

    constructor(
        name: string,
        shortName: string,
        public readonly discount: number,
        public readonly entrustedThingsLossLimit: Money,
        public readonly noClaimBonus: boolean
    ) {
        super(name, shortName);
    }
}
